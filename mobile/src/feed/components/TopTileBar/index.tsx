import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

// styles
import styles from './styles';

// components
import UserDataView from '../UserData';
import UserIconView from '../UserIcon';

interface ITopTileBarViewProps {
  imgUrl: string;
  username: string;
  createdAt: string;
}

const TopTileBarView: FC<ITopTileBarViewProps> = (props) => {
  return (
    <TouchableOpacity style={styles.topTileBarStyle}>
      <UserIconView imgUrl={props.imgUrl} />
      <UserDataView username={props.username} createdAt={props.createdAt} />
    </TouchableOpacity>
  );
};

export default memo(TopTileBarView);
