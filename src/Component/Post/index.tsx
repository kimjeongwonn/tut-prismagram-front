import React, {useState} from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import useInput from '../../Hooks/useInput';
import ProfileImage from '../ProfileImage';
import { HeartEmpty, HeartFull, CommentIcon } from '../Icons';
import { TOGGLE_LIKE, ADD_COMMENT, READ_COMMENTS } from './query';
import moment from 'moment';
import 'moment/locale/ko';
import * as C from './styled';

moment.locale('ko');

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
    <C.PostWrapper>
      <C.AuthorContainer>
        <C.AuthorLink to={`/profile/${data?.user.username}`}>
          <ProfileImage img={data?.user?.profileImage ?? null} size={32} margin={'0 10px'} />
        </C.AuthorLink>
        <C.AuthorLink to={`/profile/${data?.user.username}`}>
          <C.AuthorName>{data?.user?.username}</C.AuthorName>
        </C.AuthorLink>
      </C.AuthorContainer>
      {/* 이미지 컨테이너 */}
      {data?.files.map((img) => (
        <img key={img.id} src={img.url} alt={'post_image'} style={{ width: '100%' }} />
      ))}
      {/* 이미지 컨테이너 끝 */}
      <C.IconContainer>
        <C.PostButton onClick={toggleLikeEvent}>
          {data?.isLike && <HeartFull />}
          {!data?.isLike && <HeartEmpty />}
        </C.PostButton>
        <C.PostButton>
          <CommentIcon />
        </C.PostButton>
      </C.IconContainer>
      <C.TextWrapper>
        <C.LikeCounter>좋아요 {data?.likesCount}개</C.LikeCounter>
        <C.AuthorLink to={`/profile/${data?.user.username}`}>
          <C.AuthorName>{data?.user.username}</C.AuthorName>
        </C.AuthorLink>
        {data?.caption}
        <C.CommentContainer>
          {data?.commentsCount && data?.commentsCount > 2 ? (
            <C.CommentCount onClick={AllCommentsHandler}>{!readableCommnents.open ? `댓글 ${data?.commentsCount}개 모두 보기` : `접기`}</C.CommentCount>
          ): null}
          {(readableCommnents.open ? readableCommnents.data : data?.comments).map((comment) => {
            return (
              <C.Comment key={comment.id}>
                <C.AuthorName>
                  <C.AuthorLink to={`/profile/${comment.user.username}`}>{comment.user.username}</C.AuthorLink>
                </C.AuthorName>
                {comment.text}
              </C.Comment>
            );
          })}
        </C.CommentContainer>
        <C.TimeStamp>{moment(data?.postAt).fromNow()}</C.TimeStamp>
      </C.TextWrapper>
      <form onSubmit={submitComment}>
        <C.CommentInputContainer placeholder="댓글 달기..." {...comment}></C.CommentInputContainer>
      </form>
    </C.PostWrapper>
  );
};

export default Post;
