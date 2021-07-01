import { useGetCommentsQuery } from '@/common/types/gql.generated';
import { useRoute } from '@react-navigation/native';

// types
import { PostScreenRouteProp } from 'feed/types/routes';
import { ICommentItem } from '../types/comment';

export const useGetComments = () => {
  const { params } = useRoute<PostScreenRouteProp>();
  const { data } = useGetCommentsQuery({ variables: { id: params.postId } });

  if (!data || !data.getComments) {
    return [];
  }

  const validComms = data.getComments.filter((comm) => {
    return comm ? true : false;
  }) as ICommentItem[];

  return validComms.map((comment) => {
    return {
      id: comment.id,
      author: comment.author,
      content: comment.content,
      createdAt: comment.createdAt,
    };
  });
};
