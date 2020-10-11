import React from 'react';
import {useMutation} from '@apollo/client'
import styled from 'styled-components'
import ProfileImage from '../ProfileImage'
import {Link} from 'react-router-dom'
import Button from '../Button'
import {FOLLOW_TOGGLE} from './query'

export const UserLink = styled(Link)`
  color: ${({ theme }) => theme.blackColor};
`;
const UserCardWrapper = styled.div`
${({ theme }) => theme.whiteBox}
padding: 20px;
width: 300px;
min-width: 200px;
display: flex;
flex-direction: column;
align-items: center;
margin: 5px 10px;
`
const UserName = styled.div`
font-size: 14px;
font-weight: 800;
margin-bottom: 10px;
text-align: center;
`

const UserCard: React.FC<{data: NexusGenFieldTypes['User']}> = ({data}) => {
const [followToggle] = useMutation<{followToggle: boolean}>(FOLLOW_TOGGLE, {
  variables: {followId: data.id},
  update(cache, {data: toggleData}) {
    cache.modify({
      id: cache.identify(data!),
      fields: {
        isFollowing: () => toggleData?.followToggle
      }
    })
  }
})

const followHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();
  followToggle()
}

return (<UserCardWrapper>
  <UserLink to={`/profile/${data.username}`}>
  <ProfileImage img={data.profileImage} size={64} margin={'0 0 10px 0'}/>
</UserLink>
  <UserLink to={`/profile/${data.username}`}>
<UserName>{data.username}</UserName>
</UserLink>
{data?.isSelf ? null : (data.isFollowing
? <Button text="UnFollowing" onClick={followHandler} isActive={data?.isFollowing}/>
: <Button text="Following" onClick={followHandler} isActive={data?.isFollowing}/>)}
</UserCardWrapper>)
}

export default UserCard