import React, { FC, memo } from 'react';
import { SafeAreaView, View } from 'react-native';
// styles
import { useStyles } from './styles';

// common components
import TextButton from '@/common/components/Button/TextButton';

// containers
import AccountSettingsButton from '@/settings/containers/Buttons';
import UserTile from '@/settings/containers/UserTile';

interface ISettingsComponentProps {
  logout(): void;
}

const SettingsView: FC<ISettingsComponentProps> = (props) => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.settingsStyle}>
        <UserTile />
        <AccountSettingsButton />
      </View>
      <View style={styles.buttonWrapper}>
        <TextButton
          label="LOG OUT"
          onPress={props.logout}
          containerStyle={styles.logoutButtonContainerStyle}
          labelStyle={styles.logoutButtonLabelStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default memo(SettingsView);
