import React, { FC, memo } from 'react';

// components
import AddPostButtonView from 'profile/components/AddPostButton';

// hooks
import { useAddPost } from 'profile/hooks/useAddPost';
// import { useCurrentUserToken } from 'common/hooks/useCurrentUserToken';

interface IAddPostButtonContainderProps {}

const AddPostButtonContainer: FC<IAddPostButtonContainderProps> = () => {
  // const userToken = useCurrentUserToken(); // thats how it should be ----------|
  // const handleEdit = useAddPost({ token: userToken }); // <---- continue ---|

  const handleEdit = useAddPost();

  return <AddPostButtonView onPress={handleEdit} />;
};

export default memo(AddPostButtonContainer);
