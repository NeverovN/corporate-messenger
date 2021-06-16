import React, { FC, memo, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';

// types
import { EditEmailRouteProp } from 'settings/types/routes';

// styles
import styles from './styles';
import { useUpdateEmail } from '@/settings/hooks/useUpdateEmail';
import { useInitialEmail } from '@/settings/hooks/useInitialEmail';

const HeaderRightEmail: FC = () => {
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const { params } = useRoute<EditEmailRouteProp>();
  const initialEmail = useInitialEmail();
  const edit = useUpdateEmail(params.newEmail);

  useEffect(() => {
    if (initialEmail === params.newEmail) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [params, initialEmail]);

  if (isChanged) {
    return (
      <TouchableOpacity onPress={edit}>
        <Icon name="check" style={styles.activeIconStyle} size={25} />
      </TouchableOpacity>
    );
  }

  return <Icon name="check" style={styles.disabledIconStile} size={25} />;
};

export default memo(HeaderRightEmail);
