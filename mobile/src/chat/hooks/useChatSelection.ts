import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// types
import { ChatScreenNavigationProp } from 'app/types/routes';

// consts
import { CHAT_STACK_NAME } from 'chat/constants/routes';

interface IUseChatSelectionParams {}

export const useChatSelection = (params: IUseChatSelectionParams) => {
  const navigation = useNavigation<ChatScreenNavigationProp>();

  const chatSelectionHandler = async () => {
    return true;
  }; // api

  const handleChatSelection = async () => {
    try {
      await chatSelectionHandler();
    } catch {
      Alert.alert('ERROR', 'Error occured'); // just for now
    }

    // sends some info on server to give user access to their account
    navigation.navigate(CHAT_STACK_NAME);
  };

  return handleChatSelection;
};
