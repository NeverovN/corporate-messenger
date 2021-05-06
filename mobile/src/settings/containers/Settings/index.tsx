import React, { memo, FC } from 'react';

import SettingsView from 'settings/components/Settings';

interface ISettingsContainerProps {}

const Settings: FC<ISettingsContainerProps> = () => {
  return <SettingsView />;
};

export default memo(Settings);
