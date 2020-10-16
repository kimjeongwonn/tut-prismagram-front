import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { FOLLOW_TOGGLE, SEE_USER } from './query';
import styled from 'styled-components';
import Loader from '../../Loader';
import ProfileImage from '../../ProfileImage';
import { RouteComponentProps } from 'react-router-dom';
import PostCard from '../../PostCard';
import Button from '../../Button';

const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserContainer = styled.div`
  width: 100%;
  display: flex;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  display: column;
`;

const UserNameSpan = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const UserInfoItems = styled.ul`
  font-size: 16px;
  margin-top: 10px;
  width: 100%;
  display: flex;
`;
const CounterItem = styled.div`
  &:not(:last-child) {
    margin-right: 40px;
  }
  & strong {
    font-weight: 800;
  }
`;

const Separator = styled.div`
  width: 100%;
  margin: 40px 0;
  height: 0;
  border-top: ${({ theme }) => theme.boxBorder};
`;

const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 60px;
`;

const Profile: React.FC<RouteComponentProps<{ username: string }>> = ({ match: { params } }) => {
  const { data, loading } = useQuery<{ seeUser: NexusGenFieldTypes['User'] }>(SEE_USER, {
    variables: { username: params.username },
  });
  const userData = data?.seeUser;
  console.log(userData);
  const [followToggle] = useMutation<{ followToggle: boolean }>(FOLLOW_TOGGLE, {
    variables: { followId: userData?.id },
    update(cache, { data: toggleData }) {
      cache.modify({
        id: cache.identify(userData!),
        fields: {
          isFollowing: () => toggleData?.followToggle,
        },
      });
    },
  });

  const followHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    followToggle();
  };

  return (
    <ProfileWrapper>
      {loading ? <Loader /> : null}
      {!loading ? (
        <>
          <UserContainer>
            <ProfileImage img={userData?.profileImage!} size={160} margin="0 100px" />
            <UserInfo>
              <UserNameSpan>{userData?.username}</UserNameSpan>
              <UserInfoItems>
                <CounterItem>
                  게시물 <strong>{userData?.postsCount}</strong>
                </CounterItem>
                <CounterItem>
                  팔로워 <strong>{userData?.followersCount}</strong>
                </CounterItem>
                <CounterItem>
                  팔로우 <strong>{userData?.followingsCount}</strong>
                </CounterItem>
              </UserInfoItems>
              <UserInfoItems>{userData?.fullName}</UserInfoItems>
              <UserInfoItems>{userData?.bio}</UserInfoItems>
              {userData?.isSelf ? null : userData?.isFollowing ? (
                <Button text="UnFollowing" onClick={followHandler} isActive={userData?.isFollowing} />
              ) : (
                <Button text="Following" onClick={followHandler} isActive={userData?.isFollowing} />
              )}
            </UserInfo>
          </UserContainer>
          <Separator />
          <PostWrapper>
            {userData?.posts.map((post) => (
              <PostCard data={post} />
            ))}
          </PostWrapper>
        </>
      ) : null}
    </ProfileWrapper>
  );
};
export default Profile;
