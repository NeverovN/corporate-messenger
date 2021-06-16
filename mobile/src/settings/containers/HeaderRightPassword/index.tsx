import React, { FC, memo, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';

// hooks
import { useUpdatePassword } from 'settings/hooks/useUpdatePassword';

// types
import { EditPasswordRouteProp } from 'settings/types/routes';

// styles
import styles from './styles';

const HeaderRightPassword: FC = () => {
  const { params } = useRoute<EditPasswordRouteProp>();
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const edit = useUpdatePassword(params.old, params.new, params.newRep);

  useEffect(() => {
    if (params.old === '' || params.new === '' || params.newRep === '') {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [params]);

  if (isChanged) {
    return (
      <TouchableOpacity onPress={edit}>
        <Icon name="check" style={styles.activeIconStyle} size={25} />
      </TouchableOpacity>
    );
  }

  return <Icon name="check" style={styles.disabledIconStile} size={25} />;
};

export default memo(HeaderRightPassword);
