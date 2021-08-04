import {
  useCreateMessageMutation,
  MessageFragmentFragmentDoc,
} from '@/common/types/gql.generated';
import { useRoute } from '@react-navigation/native';

// types
import { ChatRouteProp } from '@/chat/chatList/types/routes';

export const useSendPressHandler = (
  message: string | null,
  resetMessage: (msg: string | null) => void,
  media: string[] | null,
  resetMediaIds: (mediaIds: string[] | null) => void,
  resetMedia: (media: string[] | null) => void,
) => {
  const { params } = useRoute<ChatRouteProp>();
  const [createMsg] = useCreateMessageMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      cache.modify({
        fields: {
          getChatById() {
            try {
              cache.writeFragment({
                fragment: MessageFragmentFragmentDoc,
                data: data.createMessage,
              });
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });
    },
  });

  if (!message && !media) {
    return () => {
      console.log('nothing');
    };
  }
  return async () => {
    resetMessage(null);
    resetMedia(null);

    try {
      await createMsg({
        variables: {
          input: {
            content: {
              text: message || '',
              media: media,
            },
            chatId: params.chatId,
          },
        },
      });
    } catch (err) {
      console.log(err);
    }

    resetMediaIds(null);
  };
};
