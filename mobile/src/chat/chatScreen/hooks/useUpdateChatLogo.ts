import { ChatPrefRouteProp } from '@/chat/chatList/types/routes';
import { useUpdateChatLogoMutation } from '@/common/types/gql.generated';
import { useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { MediaUploader } from '../utils/MediaUploader';

export const useUpdateChatLogo = () => {
  const [updateLogo] = useUpdateChatLogoMutation();
  const { params } = useRoute<ChatPrefRouteProp>();
  return async () => {
    const logo = await ImageCropPicker.openPicker({
      mediaType: 'photo',
      includeBase64: true,
    });
    const logoBase64 = logo.data || null;
    const logoURL = await MediaUploader.uploadOneToStorage(logoBase64);
    try {
      updateLogo({
        variables: {
          input: {
            chatId: params.chatId,
            logoId: logoURL,
          },
        },
      });
    } catch (error) {
      Alert.alert('Error', `${error}`);
    }
  };
};
