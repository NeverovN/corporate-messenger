import React, { memo, FC } from 'react';
import SimplePopupMenu, { PopupMenuItem } from 'react-native-simple-popup-menu';
import FastImage from 'react-native-fast-image';

// styles
import { useStyles } from './styles';

// consts
import ACTIONS from 'profile/constants/actions';
import { useHandleAvatarActions } from '@/profile/hooks/useHandleAvatarActions';

interface IUserImageContainerProps {
  image: string | null;
  size?: number;
}

const items: PopupMenuItem[] = [
  { id: ACTIONS.EDIT_AVATAR, label: 'Edit' },
  { id: ACTIONS.DELETE_AVATAR, label: 'Delete' },
];

const UserImageContainer: FC<IUserImageContainerProps> = (props) => {
  const styles = useStyles();
  const style = {
    height: props.size,
    width: props.size,
    borderRadius: props.size,
  };

  const actionsHandler = useHandleAvatarActions();

  return (
    <SimplePopupMenu
      items={items}
      onSelect={({ id }: PopupMenuItem) => actionsHandler(id)}>
      {props.image ? (
        <FastImage
          style={{ ...styles.imageStyle, ...style }}
          source={{ uri: props.image }}
        />
      ) : (
        <FastImage
          style={{ ...styles.imageStyle, ...style }}
          source={require('common/assets/images/defaultAvatar.png')}
        />
      )}
    </SimplePopupMenu>
  );
};

export default memo(UserImageContainer);
