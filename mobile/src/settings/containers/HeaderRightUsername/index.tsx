import React, { FC, memo, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';

// hooks
import { useUpdateUsername } from 'settings/hooks/useUpdateUsername';
import { useInitialUsername } from '@/settings/hooks/useInitialUsername';

// types
import { EditUsernameRouteProp } from 'settings/types/routes';

// styles
import styles from './styles';

const HeaderRightUsername: FC = () => {
  const { params } = useRoute<EditUsernameRouteProp>();
  const [initialFirstName, initialLastName] = useInitialUsername();
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const edit = useUpdateUsername(params.newFirstName, params?.newLastName);

  useEffect(() => {
    if (
      initialFirstName === params.newFirstName &&
      initialLastName === params.newLastName
    ) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [params, initialFirstName, initialLastName]);

  if (isChanged) {
    return (
      <TouchableOpacity onPress={edit}>
        <Icon name="check" style={styles.activeIconStyle} size={25} />
      </TouchableOpacity>
    );
  }

  return <Icon name="check" style={styles.disabledIconStile} size={25} />;
};

export default memo(HeaderRightUsername);
