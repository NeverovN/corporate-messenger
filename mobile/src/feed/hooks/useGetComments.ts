import { useGetPostByIdQuery } from '@/common/types/gql.generated';
import { useRoute } from '@react-navigation/native';

// types
import { PostScreenRouteProp } from 'feed/types/routes';
import { ICommentItem } from '../types/comment';

export const useGetComments = () => {
  const { params } = useRoute<PostScreenRouteProp>();
  const { data } = useGetPostByIdQuery({
    variables: { id: params.postId },
  });

  if (!data || !data.getPost || !data.getPost.comments) {
    return [];
  }

  const validComms = data.getPost.comments.filter((comm) => {
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
