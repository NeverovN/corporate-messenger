import React, { FC, memo } from 'react';

// components
import AddPostButtonView from 'profile/components/AddPostButton';

// hooks
import { useAddPost } from 'profile/hooks/useAddPost';
// import { useCurrentUserToken } from 'common/hooks/useCurrentUserToken';

interface IAddPostButtonContainerProps {}

const AddPostButtonContainer: FC<IAddPostButtonContainerProps> = () => {
  // const userToken = useCurrentUserToken(); // thats how it should be ----------|
  // const handleEdit = useAddPost({ token: userToken }); // <---- continue ---|

  const handleAddPost = useAddPost();

  return <AddPostButtonView onPress={handleAddPost} />;
};

export default memo(AddPostButtonContainer);
