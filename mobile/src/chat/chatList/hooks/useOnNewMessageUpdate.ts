import {
  MessageFragmentFragmentDoc,
  useGetUserQuery,
  useNewMessageSubscription,
} from '@/common/types/gql.generated';
import { getName } from '@/profile/utils/getName';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import NotificationService from '../notifications/NotificationService';
import { useState } from 'react';
import { Alert } from 'react-native';

export const useOnNewMessageUpdate = (chatId: string) => {
  const [, setRegisterToken] = useState<string>('');
  const [, setFcmRegistered] = useState<boolean>(false);

  const onRegister = (token: { os: string; token: string }) => {
    setRegisterToken(token.token);
    setFcmRegistered(true);
  };
  const onNotification = () => Alert.alert('Notification', 'Notification text');
  const { data } = useGetUserQuery();
  const navigation = useNavigation();
  const notification = new NotificationService(onRegister, onNotification);

  // eventually started work, don't trust this code
  const redirection = () => {
    navigation.goBack();
  };
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

      notification.localNotification();
      // shit code cuz i cant fix server side
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
          onPress: redirection,
        });
      }
    },
  });
};
