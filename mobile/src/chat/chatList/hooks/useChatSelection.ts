import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// types
import { SharedStackNavigationProp } from 'app/types/routes';

// consts
import { SHARED_STACK_NAME, CHAT_STACK_NAME } from 'app/constants/routes';

// interface IUseChatSelectionParams {}

export const useChatSelection = (
  {
    /*params: IUseChatSelectionParams*/
  },
) => {
  const navigation = useNavigation<SharedStackNavigationProp>();

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
    navigation.navigate(SHARED_STACK_NAME, { screen: CHAT_STACK_NAME });
  };

  return handleChatSelection;
};
