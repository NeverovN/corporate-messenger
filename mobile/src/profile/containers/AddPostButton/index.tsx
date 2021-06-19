import React, { FC, memo } from 'react';

// components
import AddPostButtonView from 'profile/components/AddPostButton';

// hooks
import { useCreatePost } from 'profile/hooks/useCreatePost';
// import { useCurrentUserToken } from 'common/hooks/useCurrentUserToken';

interface IAddPostButtonContainerProps {}

const AddPostButtonContainer: FC<IAddPostButtonContainerProps> = () => {
  // const userToken = useCurrentUserToken(); // thats how it should be ----------|
  // const handleEdit = useAddPost({ token: userToken }); // <---- continue ---|

  const handleAddPost = useCreatePost();

  return <AddPostButtonView onPress={handleAddPost} />;
};

export default memo(AddPostButtonContainer);
