import React, { memo, FC } from 'react';

// components
// import FriendFeedView from '@/feed/components/FriendFeed';

// // hooks
// import { useFriendFeedList } from 'feed/hooks/useFriendFeedList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/common/redux/store';
import { View, Text, Button } from 'react-native';
import { decrement, increment } from '@/common/redux/slices/counter';

interface IFriendFeedContainerProps {}

const FriendFeed: FC<IFriendFeedContainerProps> = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Current state: {count}</Text>
      <Button title="inc" onPress={() => dispatch(increment())} />
      <Button title="dec" onPress={() => dispatch(decrement())} />
    </View>
  );
  // const friendFeedList = useFriendFeedList();
  // return <FriendFeedView data={friendFeedList} />;
};

export default memo(FriendFeed);
