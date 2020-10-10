import React, {useState} from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import styled from 'styled-components';
import useInput from '../../Hooks/useInput';
import { Link } from 'react-router-dom';
import ProfileImage from '../ProfileImage';
import { HeartEmpty, HeartFull, CommentIcon } from '../Icons';
import { TOGGLE_LIKE, ADD_COMMENT, READ_COMMENTS } from './query';
import moment from 'moment';
import 'moment/locale/ko';

moment.locale('ko');

const PostWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 40px;
  }
  ${({ theme }) => theme.whiteBox}
`;

const AuthorContainer = styled.div`
  height: 60px;
  padding: 5px;
  display: flex;
  align-items: center;
`;

const AuthorName = styled.span`
  font-weight: 800;
  font-size: 14px;
  padding-right: 5px;
`;

const LikeCounter = styled.div`
  font-weight: 800;
  font-size: 14px;
  padding-bottom: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;

const PostButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const TextWrapper = styled.div`
  padding: 0 15px 15px 15px;
`;

const AuthorLink = styled(Link)`
  color: ${({ theme }) => theme.blackColor};
`;

const TimeStamp = styled.div`
  color: ${({ theme }) => theme.darkGreyColor};
  font-size: 12px;
  margin-top: 10px;
`;

const CommentContainer = styled.ul`
  list-style-type: none;
`;

const CommentCount = styled.div`
  color: ${({ theme }) => theme.darkGreyColor};
  margin-top: 10px;
  font-weight: 600;
  cursor: pointer;
`;

const Comment = styled.li`
  margin-top: 8px;
`;

const CommentInputContainer = styled.input`
  border: 0;
  border-top: ${({ theme }) => theme.boxBorder};
  background: none;
  width: 100%;
  border-radius: 0;
  padding: 30px 15px;
  font-size: 14px;
`;

const Post: React.FC<{ data: NexusGenFieldTypes['Post'] }> = ({ data }) => {
  const [comment, setComment] = useInput('');
  const [readableCommnents, setReadableCommnents] = useState<{data: NexusGenFieldTypes['Comment'][]; open:boolean}>({data: [], open: false});
  
  const [loadAllComments] = useLazyQuery<{seePost: NexusGenFieldTypes['Post']}>(READ_COMMENTS, {
    variables: {postId: data?.id},
    onCompleted(loadData) {
      setReadableCommnents(existing => ({...existing, data: [...loadData.seePost.comments]}))
    },

  })

  const [submitCommentMutation] = useMutation<{ addComment: NexusGenFieldTypes['Comment'] }>(ADD_COMMENT, {
    variables: {
      postId: data?.id,
      text: comment.value,
    },
    update(cache, { data: newCommentData }) {
    setReadableCommnents(existing => ({...existing, data:[...existing.data, newCommentData?.addComment!]}));
      cache.modify({ 
        id: cache.identify(data!),
        fields: {
          comments(existing: NexusGenFieldTypes['Comment'][]) {
            return [...existing, newCommentData?.addComment];
          },
          commentsCount(existing) {
            return existing + 1;
          },
        },
      });
    },
  });
  const [toggleLike] = useMutation<{ toggleLike: boolean }>(TOGGLE_LIKE, {
    variables: {
      postId: data?.id,
    },
    update(cache, { data: toggleData }) {
      cache.modify({
        id: cache.identify(data!),
        fields: {
          isLike(_) {
            return toggleData?.toggleLike;
          },
          likesCount(existing) {
            return toggleData?.toggleLike ? existing + 1 : existing - 1;
          },
        },
      });
    },
    // refetchQueries: [
    //   {
    //     query: gql`
    //       query SeeFeed {
    //         seeFeed {
    //           id
    //           likesCount
    //           isLike
    //         }
    //       }
    //     `,
    //   },
    // ],
  });

  const toggleLikeEvent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    toggleLike();
  };
  const submitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitCommentMutation();
    setComment('');
  };
  const AllCommentsHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (!readableCommnents.open) loadAllComments();
    setReadableCommnents(existing => ({...existing, open: !existing.open}));
    
  }

  return (
    <PostWrapper>
      <AuthorContainer>
        <AuthorLink to={`/profile/${data?.user.username}`}>
          <ProfileImage img={data?.user?.profileImage ?? null} size={32} margin={'0 10px'} />
        </AuthorLink>
        <AuthorLink to={`/profile/${data?.user.username}`}>
          <AuthorName>{data?.user?.username}</AuthorName>
        </AuthorLink>
      </AuthorContainer>
      {/* 이미지 컨테이너 */}
      {data?.files.map((img) => (
        <img key={img.id} src={img.url} alt={undefined} style={{ width: '100%' }} />
      ))}
      {/* 이미지 컨테이너 끝 */}
      <IconContainer>
        <PostButton onClick={toggleLikeEvent}>
          {data?.isLike && <HeartFull />}
          {!data?.isLike && <HeartEmpty />}
        </PostButton>
        <PostButton>
          <CommentIcon />
        </PostButton>
      </IconContainer>
      <TextWrapper>
        <LikeCounter>좋아요 {data?.likesCount}개</LikeCounter>
        <AuthorLink to={`/profile/${data?.user.username}`}>
          <AuthorName>{data?.user.username}</AuthorName>
        </AuthorLink>
        {data?.caption}
        <CommentContainer>
          {data?.commentsCount && data?.commentsCount > 2 ? (
            <CommentCount onClick={AllCommentsHandler}>{!readableCommnents.open ? `댓글 ${data?.commentsCount}개 모두 보기` : `접기`}</CommentCount>
          ): null}
          {(readableCommnents.open ? readableCommnents.data : data?.comments).map((comment) => {
            return (
              <Comment key={comment.id}>
                <AuthorName>
                  <AuthorLink to={`/profile/${comment.user.username}`}>{comment.user.username}</AuthorLink>
                </AuthorName>
                {comment.text}
              </Comment>
            );
          })}
        </CommentContainer>
        <TimeStamp>{moment(data?.postAt).fromNow()}</TimeStamp>
      </TextWrapper>
      <form onSubmit={submitComment}>
        <CommentInputContainer placeholder="댓글 달기..." {...comment}></CommentInputContainer>
      </form>
    </PostWrapper>
  );
};

export default Post;
