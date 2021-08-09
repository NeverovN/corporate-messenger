import React, { FC, memo, useEffect, useState } from 'react';

import NewChatScreenView from 'chat/chatList/components/NewChatScreen';
import { useNavigation } from '@react-navigation/native';

// styles
import { useStyles } from './styles';

// common components
import IconButton from 'common/components/Button/IconButton';
import { selectedFriendsVar } from '@/common/cache/cache';
import { IconType } from '@/common/types/styles';

interface INewChatScreenContainerProps {}

const NewChatScreenContainer: FC<INewChatScreenContainerProps> = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    const goBack = () => {
      selectedFriendsVar([]);
      navigation.goBack();
    };

    const headerLeft = () => (
      <IconButton
        icon="back"
        onPress={goBack}
        iconType={IconType.LARGE}
        iconStyle={styles.iconStyle}
      />
    );
    navigation.setOptions({ headerLeft });
  }, [navigation, styles.iconStyle]);

  return (
    <NewChatScreenView
      search={() => console.log('search pressed')}
      filter={filter}
      onChangeFilter={setFilter}
    />
  );
};

export default memo(NewChatScreenContainer);
