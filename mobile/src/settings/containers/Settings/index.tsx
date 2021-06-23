import React, { memo, FC } from 'react';

// components
import SettingsView from '@/settings/components/Settings';

// hooks
import { useLogOut } from 'settings/hooks/useLogOut';

interface ISettingsContainerProps {}

const Settings: FC<ISettingsContainerProps> = () => {
  const logout = useLogOut();

  return <SettingsView logout={logout} />;
};

export default memo(Settings);
