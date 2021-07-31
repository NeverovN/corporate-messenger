import {
  useCreateMessageMutation,
  MessageFragmentFragmentDoc,
} from '@/common/types/gql.generated';
import { useRoute } from '@react-navigation/native';

// types
import { ChatRouteProp } from '@/chat/chatList/types/routes';
import { Image } from 'react-native-image-crop-picker';

export const useSendPressHandler = (
  message: string | null,
  resetMessage: (msg: string | null) => void,
  media: string[],
  resetMedia: (media: Image[] | null) => void,
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

      resetMessage(null);
      media = [];
      resetMedia(null);
    } catch (err) {
      console.log(err);
    }
  };
};
