import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';

// types
import { EditRouteProp } from 'settings/types/routes';

// styles
import styles from './styles';
import { useUpdateEmail } from '@/settings/hooks/useUpdateEmail';

const HeaderRight: FC = () => {
  const { params } = useRoute<EditRouteProp>();
  const edit = useUpdateEmail(params?.newEmail);
  return (
    <TouchableOpacity onPress={edit}>
      <Icon name="check" style={styles.iconStyle} size={25} />
    </TouchableOpacity>
  );
};

export default memo(HeaderRight);
