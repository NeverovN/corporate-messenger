import { useGetPostByIdQuery } from '@/common/types/gql.generated';
import { getName } from '@/profile/utils/getName';
import { useRoute } from '@react-navigation/native';

// types
import { PostScreenRouteProp } from 'feed/types/routes';
import { ICommentItem } from '../types/comment';

export const useGetComments = (): ICommentItem[] => {
  const { params } = useRoute<PostScreenRouteProp>();
  const { data } = useGetPostByIdQuery({
    variables: { id: params.postId },
  });

  if (!data || !data.getPost || !data.getPost.comments) {
    return [];
  }

  const validComms = data.getPost.comments.filter((comm) => {
    return comm ? true : false;
  });

  return validComms.map((comment) => {
    return {
      id: comment.id,
      author: {
        id: comment.author.id,
        name: getName(
          comment.author.firstName || '',
          comment.author.lastName || '',
        ),
        avatar: comment.author.avatar || null,
      },
      content: comment.content,
      createdAt: comment.createdAt,
    };
  });
};
