import { useUpdateAvatarMutation } from '@/common/types/gql.generated';
import ImageCropPicker from 'react-native-image-crop-picker';

// constants
import ACTIONS from 'profile/constants/actions';
import { MediaUploader } from '@/chat/chatScreen/utils/MediaUploader';
import { Alert } from 'react-native';

export const useHandleAvatarActions = () => {
  const [updateAvatar] = useUpdateAvatarMutation();
  return async (id: ACTIONS) => {
    switch (id) {
      case ACTIONS.EDIT_AVATAR: {
        const image = await ImageCropPicker.openPicker({
          mediaType: 'photo',
          includeBase64: true,
        });

        const imageBase64 = image.data || null;
        const avatarURL = await MediaUploader.uploadOneToStorage(imageBase64);
        try {
          updateAvatar({ variables: { avatarId: avatarURL } });
        } catch (error) {
          Alert.alert('Error', `${error}`);
        }
        break;
      }
      case ACTIONS.DELETE_AVATAR: {
        updateAvatar();
      }
    }
  };
};
