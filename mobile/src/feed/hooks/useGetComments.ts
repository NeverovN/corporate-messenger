import { useGetPostByIdQuery } from '@/common/types/gql.generated';
import { getName } from '@/profile/utils/getName';
import { NetworkStatus } from '@apollo/client';
import { useRoute } from '@react-navigation/native';

// types
import { PostScreenRouteProp } from 'feed/types/routes';
import { ICommentItem } from '../types/comment';

export const useGetComments = (): {
  data: ICommentItem[];
  refresh(): void;
  loading: boolean;
} => {
  const { params } = useRoute<PostScreenRouteProp>();
  const { data, refetch, networkStatus } = useGetPostByIdQuery({
    variables: { id: params.postId },
    notifyOnNetworkStatusChange: true,
  });

  const loading = NetworkStatus.ready === networkStatus ? false : true;

  if (!data || !data.getPost || !data.getPost.comments) {
    return { data: [], refresh: refetch, loading };
  }

  const validComms = data.getPost.comments.filter((comm) => {
    return comm ? true : false;
  });

  const comms = validComms.map((comment) => {
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

  return { data: comms, refresh: refetch, loading };
};
