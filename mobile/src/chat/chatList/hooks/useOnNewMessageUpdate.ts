import {
  MessageFragmentFragmentDoc,
  useGetUserQuery,
  useNewMessageSubscription,
} from '@/common/types/gql.generated';
import { getName } from '@/profile/utils/getName';
import Toast from 'react-native-toast-message';

export const useOnNewMessageUpdate = (chatId: string) => {
  const { data } = useGetUserQuery();
  useNewMessageSubscription({
    variables: { chatId: chatId },
    onSubscriptionData: ({ subscriptionData, client }) => {
      const message = subscriptionData.data?.newMessage;

      if (!message) {
        throw Error('update error');
      }

      client.cache.modify({
        fields: {
          getChatById() {
            try {
              client.cache.writeFragment({
                fragment: MessageFragmentFragmentDoc,
                data: message,
              });
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });

      // shitcode cuz i cant fix server side
      if (data && data.getUser && data.getUser.id !== message.author.id) {
        const authorName = getName(
          message.author.firstName || '',
          message.author.lastName || '',
        );

        Toast.show({
          type: 'info',
          text1: authorName,
          text2: message.content,
          topOffset: 50,
          onPress: () => console.log('pressed'),
        });
      }
    },
  });
};
