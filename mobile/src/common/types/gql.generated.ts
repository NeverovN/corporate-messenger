import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  token: Scalars['String'];
  user: User;
};

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['ID'];
  isDialog: Scalars['Boolean'];
  title: Scalars['String'];
  participants: Array<Maybe<User>>;
  createdAt: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Maybe<Message>>>;
  settings?: Maybe<ChatSettings>;
};

export type ChatSettings = {
  __typename?: 'ChatSettings';
  testField?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  postId: Scalars['ID'];
  author: User;
  content: Scalars['String'];
  createdAt: Scalars['String'];
  lastEdit?: Maybe<Scalars['String']>;
  likes?: Maybe<Array<User>>;
};

export type CreateChatInput = {
  participants: Array<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type CreateDialogInput = {
  participant: Scalars['ID'];
};

export type CreateMessageInput = {
  content: MessageContentInput;
  chatId: Scalars['ID'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  content: MessageContent;
  author: User;
  chatId: Scalars['ID'];
  createdAt: Scalars['String'];
  readBy: Array<User>;
  lastEdit?: Maybe<Scalars['String']>;
};

export type MessageContent = {
  __typename?: 'MessageContent';
  text?: Maybe<Scalars['String']>;
  media?: Maybe<Array<Scalars['String']>>;
};

export type MessageContentInput = {
  text: Scalars['String'];
  media?: Maybe<Array<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addFriend?: Maybe<User>;
  clearChatHistory: Chat;
  createChat: Chat;
  createComment: Comment;
  createDialog: Chat;
  createMessage: Message;
  createPost: Post;
  createUser: AuthenticationResult;
  deleteChatById: Chat;
  deleteCommentById: Comment;
  deleteMessageById: Message;
  deletePostById: Post;
  editChatTitle: Chat;
  editComment: Comment;
  editEmail: User;
  editMessage: Message;
  editPassword: User;
  editPost: Post;
  editUsername: User;
  leaveChat: Chat;
  likeComment: Comment;
  login: AuthenticationResult;
  markRead: Message;
  removeFriend?: Maybe<User>;
  toggleLike: Post;
  updateAvatar: User;
  updateChatLogo: Chat;
};


export type MutationAddFriendArgs = {
  friendId: Scalars['ID'];
};


export type MutationClearChatHistoryArgs = {
  chatId: Scalars['ID'];
};


export type MutationCreateChatArgs = {
  input: CreateChatInput;
};


export type MutationCreateCommentArgs = {
  postId: Scalars['ID'];
  content: Scalars['String'];
};


export type MutationCreateDialogArgs = {
  input: CreateDialogInput;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationCreatePostArgs = {
  textContent?: Maybe<Scalars['String']>;
  mediaContent?: Maybe<Array<Scalars['String']>>;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteChatByIdArgs = {
  chatId: Scalars['ID'];
};


export type MutationDeleteCommentByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMessageByIdArgs = {
  messageId: Scalars['ID'];
};


export type MutationDeletePostByIdArgs = {
  postId: Scalars['ID'];
};


export type MutationEditChatTitleArgs = {
  input: UpdateChatTitle;
};


export type MutationEditCommentArgs = {
  commentId: Scalars['ID'];
  textContent: Scalars['String'];
};


export type MutationEditEmailArgs = {
  newEmail: Scalars['String'];
};


export type MutationEditMessageArgs = {
  messageId: Scalars['ID'];
  newContent: Scalars['String'];
};


export type MutationEditPasswordArgs = {
  input: UpdatePasswordInput;
};


export type MutationEditPostArgs = {
  postId: Scalars['ID'];
  textContent?: Maybe<Scalars['String']>;
  mediaContent?: Maybe<Array<Scalars['String']>>;
};


export type MutationEditUsernameArgs = {
  newFirstName: Scalars['String'];
  newLastName: Scalars['String'];
};


export type MutationLeaveChatArgs = {
  chatId: Scalars['ID'];
};


export type MutationLikeCommentArgs = {
  commentId: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationMarkReadArgs = {
  messageId: Scalars['ID'];
};


export type MutationRemoveFriendArgs = {
  friendId: Scalars['ID'];
};


export type MutationToggleLikeArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateAvatarArgs = {
  avatarId?: Maybe<Scalars['String']>;
};


export type MutationUpdateChatLogoArgs = {
  input: UpdateChatLogoInput;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  author: User;
  createdAt: Scalars['String'];
  lastEdit?: Maybe<Scalars['String']>;
  textContent?: Maybe<Scalars['String']>;
  mediaContent?: Maybe<Array<Scalars['String']>>;
  likes?: Maybe<Array<User>>;
  comments?: Maybe<Array<Comment>>;
};

export type Query = {
  __typename?: 'Query';
  getAllPosts?: Maybe<Array<Maybe<Post>>>;
  getChatById?: Maybe<Chat>;
  getChats?: Maybe<Array<Maybe<Chat>>>;
  getComment?: Maybe<Comment>;
  getFriendPosts?: Maybe<Array<Maybe<Post>>>;
  getMessageById?: Maybe<Message>;
  getPost?: Maybe<Post>;
  getPosts?: Maybe<Array<Maybe<Post>>>;
  getUser: User;
  getUserById?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  getUsersPosts?: Maybe<Array<Maybe<Post>>>;
};


export type QueryGetChatByIdArgs = {
  chatId: Scalars['ID'];
};


export type QueryGetCommentArgs = {
  id: Scalars['ID'];
};


export type QueryGetMessageByIdArgs = {
  messageId: Scalars['ID'];
};


export type QueryGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryGetPostsArgs = {
  author?: Maybe<Scalars['ID']>;
};


export type QueryGetUserArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  chatDeleted: Chat;
  messageDeleted: Message;
  messageEdited: Message;
  newChat: Chat;
  newMessage: Message;
  newPost: Post;
};


export type SubscriptionMessageDeletedArgs = {
  chatId: Scalars['ID'];
};


export type SubscriptionMessageEditedArgs = {
  chatId: Scalars['ID'];
};


export type SubscriptionNewMessageArgs = {
  chatId: Scalars['ID'];
};

export type UpdateChatLogoInput = {
  chatId: Scalars['ID'];
  logoId?: Maybe<Scalars['String']>;
};

export type UpdateChatTitle = {
  chatId: Scalars['ID'];
  newTitle: Scalars['String'];
};

export type UpdatePasswordInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  friends: Array<User>;
  theme?: Maybe<Scalars['String']>;
};

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'avatar' | 'theme'>
  & { friends: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'avatar'>
    & { friends: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  )> }
);

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthenticationResult' }
    & Pick<AuthenticationResult, 'token'>
    & { user: (
      { __typename?: 'User' }
      & UserFragmentFragment
    ) }
  ) }
);

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'AuthenticationResult' }
    & Pick<AuthenticationResult, 'token'>
    & { user: (
      { __typename?: 'User' }
      & UserFragmentFragment
    ) }
  ) }
);

export type GetChatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChatsQuery = (
  { __typename?: 'Query' }
  & { getChats?: Maybe<Array<Maybe<(
    { __typename?: 'Chat' }
    & ChatFragmentFragment
  )>>>, getUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type CreateChatMutationVariables = Exact<{
  input: CreateChatInput;
}>;


export type CreateChatMutation = (
  { __typename?: 'Mutation' }
  & { createChat: (
    { __typename?: 'Chat' }
    & ChatFragmentFragment
  ) }
);

export type DeleteChatByIdMutationVariables = Exact<{
  chatId: Scalars['ID'];
}>;


export type DeleteChatByIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteChatById: (
    { __typename?: 'Chat' }
    & ChatFragmentFragment
  ) }
);

export type MarkReadMutationVariables = Exact<{
  messageId: Scalars['ID'];
}>;


export type MarkReadMutation = (
  { __typename?: 'Mutation' }
  & { markRead: (
    { __typename?: 'Message' }
    & MessageFragmentFragment
  ) }
);

export type NewChatSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewChatSubscription = (
  { __typename?: 'Subscription' }
  & { newChat: (
    { __typename?: 'Chat' }
    & ChatFragmentFragment
  ) }
);

export type MessageEditedSubscriptionVariables = Exact<{
  chatId: Scalars['ID'];
}>;


export type MessageEditedSubscription = (
  { __typename?: 'Subscription' }
  & { messageEdited: (
    { __typename?: 'Message' }
    & MessageFragmentFragment
  ) }
);

export type ChatDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ChatDeletedSubscription = (
  { __typename?: 'Subscription' }
  & { chatDeleted: (
    { __typename?: 'Chat' }
    & ChatFragmentFragment
  ) }
);

export type ChatFragmentFragment = (
  { __typename?: 'Chat' }
  & Pick<Chat, 'id' | 'createdAt' | 'isDialog' | 'title' | 'logo'>
  & { participants: Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
  )>>, messages?: Maybe<Array<Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'createdAt' | 'chatId' | 'lastEdit'>
    & { content: (
      { __typename?: 'MessageContent' }
      & Pick<MessageContent, 'text' | 'media'>
    ), author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName'>
    ), readBy: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  )>>> }
);

export type MessageFragmentFragment = (
  { __typename?: 'Message' }
  & Pick<Message, 'id' | 'createdAt' | 'lastEdit' | 'chatId'>
  & { content: (
    { __typename?: 'MessageContent' }
    & Pick<MessageContent, 'text' | 'media'>
  ), author: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName'>
  ), readBy: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type GetChatByIdQueryVariables = Exact<{
  chatId: Scalars['ID'];
}>;


export type GetChatByIdQuery = (
  { __typename?: 'Query' }
  & { getChatById?: Maybe<(
    { __typename?: 'Chat' }
    & ChatFragmentFragment
  )>, getUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type GetMessageByIdQueryVariables = Exact<{
  messageId: Scalars['ID'];
}>;


export type GetMessageByIdQuery = (
  { __typename?: 'Query' }
  & { getMessageById?: Maybe<(
    { __typename?: 'Message' }
    & MessageFragmentFragment
  )> }
);

export type CreateMessageMutationVariables = Exact<{
  input: CreateMessageInput;
}>;


export type CreateMessageMutation = (
  { __typename?: 'Mutation' }
  & { createMessage: (
    { __typename?: 'Message' }
    & MessageFragmentFragment
  ) }
);

export type DeleteMessageMutationVariables = Exact<{
  messageId: Scalars['ID'];
}>;


export type DeleteMessageMutation = (
  { __typename?: 'Mutation' }
  & { deleteMessageById: (
    { __typename?: 'Message' }
    & MessageFragmentFragment
  ) }
);

export type EditMessageMutationVariables = Exact<{
  messageId: Scalars['ID'];
  newContent: Scalars['String'];
}>;


export type EditMessageMutation = (
  { __typename?: 'Mutation' }
  & { editMessage: (
    { __typename?: 'Message' }
    & MessageFragmentFragment
  ) }
);

export type EditTitleMutationVariables = Exact<{
  input: UpdateChatTitle;
}>;


export type EditTitleMutation = (
  { __typename?: 'Mutation' }
  & { editChatTitle: (
    { __typename?: 'Chat' }
    & Pick<Chat, 'id' | 'title'>
  ) }
);

export type UpdateChatLogoMutationVariables = Exact<{
  input: UpdateChatLogoInput;
}>;


export type UpdateChatLogoMutation = (
  { __typename?: 'Mutation' }
  & { updateChatLogo: (
    { __typename?: 'Chat' }
    & ChatFragmentFragment
  ) }
);

export type ClearHistoryMutationVariables = Exact<{
  chatId: Scalars['ID'];
}>;


export type ClearHistoryMutation = (
  { __typename?: 'Mutation' }
  & { clearChatHistory: (
    { __typename?: 'Chat' }
    & Pick<Chat, 'id'>
  ) }
);

export type LeaveChatMutationVariables = Exact<{
  chatId: Scalars['ID'];
}>;


export type LeaveChatMutation = (
  { __typename?: 'Mutation' }
  & { leaveChat: (
    { __typename?: 'Chat' }
    & Pick<Chat, 'id'>
  ) }
);

export type NewMessageSubscriptionVariables = Exact<{
  chatId: Scalars['ID'];
}>;


export type NewMessageSubscription = (
  { __typename?: 'Subscription' }
  & { newMessage: (
    { __typename?: 'Message' }
    & MessageFragmentFragment
  ) }
);

export type MessageDeletedSubscriptionVariables = Exact<{
  chatId: Scalars['ID'];
}>;


export type MessageDeletedSubscription = (
  { __typename?: 'Subscription' }
  & { messageDeleted: (
    { __typename?: 'Message' }
    & MessageFragmentFragment
  ) }
);

export type GetFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeedQuery = (
  { __typename?: 'Query' }
  & { getAllPosts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'createdAt' | 'textContent' | 'mediaContent'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
    ), likes?: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )>>, comments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id'>
    )>> }
  )>>> }
);

export type GetFriendFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFriendFeedQuery = (
  { __typename?: 'Query' }
  & { getFriendPosts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'createdAt' | 'textContent' | 'mediaContent'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
    ), likes?: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )>>, comments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id'>
    )>> }
  )>>> }
);

export type CreateCommentMutationVariables = Exact<{
  postId: Scalars['ID'];
  content: Scalars['String'];
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment: (
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'content' | 'createdAt'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
    ) }
  ) }
);

export type DeleteCommentByIdMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCommentByIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteCommentById: (
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'content' | 'createdAt'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
    ) }
  ) }
);

export type LikeCommentMutationVariables = Exact<{
  commentId: Scalars['ID'];
}>;


export type LikeCommentMutation = (
  { __typename?: 'Mutation' }
  & { likeComment: (
    { __typename?: 'Comment' }
    & CommentFragmentFragment
  ) }
);

export type EditCommentMutationVariables = Exact<{
  commentId: Scalars['ID'];
  textContent: Scalars['String'];
}>;


export type EditCommentMutation = (
  { __typename?: 'Mutation' }
  & { editComment: (
    { __typename?: 'Comment' }
    & CommentFragmentFragment
  ) }
);

export type GetCommentByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCommentByIdQuery = (
  { __typename?: 'Query' }
  & { getComment?: Maybe<(
    { __typename?: 'Comment' }
    & CommentFragmentFragment
  )>, getUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type CommentFragmentFragment = (
  { __typename?: 'Comment' }
  & Pick<Comment, 'id' | 'content' | 'createdAt'>
  & { author: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
  ), likes?: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )>> }
);

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPostByIdQuery = (
  { __typename?: 'Query' }
  & { getPost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'createdAt' | 'textContent' | 'mediaContent'>
    & { likes?: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )>>, author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
    ), comments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & CommentFragmentFragment
    )>> }
  )> }
);

export type ToggleLikeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ToggleLikeMutation = (
  { __typename?: 'Mutation' }
  & { toggleLike: (
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
    & { likes?: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )>>, author: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ) }
  ) }
);

export type EditPostMutationVariables = Exact<{
  postId: Scalars['ID'];
  textContent?: Maybe<Scalars['String']>;
  mediaContent?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type EditPostMutation = (
  { __typename?: 'Mutation' }
  & { editPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'createdAt' | 'textContent' | 'mediaContent'>
    & { likes?: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )>>, author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
    ), comments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & CommentFragmentFragment
    )>> }
  ) }
);

export type DeletePostByIdMutationVariables = Exact<{
  postId: Scalars['ID'];
}>;


export type DeletePostByIdMutation = (
  { __typename?: 'Mutation' }
  & { deletePostById: (
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
  ) }
);

export type PostFragmentFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'createdAt' | 'textContent' | 'mediaContent'>
  & { author: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
  ), likes?: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )>>, comments?: Maybe<Array<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id'>
  )>> }
);

export type UpdateAvatarMutationVariables = Exact<{
  avatarId?: Maybe<Scalars['String']>;
}>;


export type UpdateAvatarMutation = (
  { __typename?: 'Mutation' }
  & { updateAvatar: (
    { __typename?: 'User' }
    & UserFragmentFragment
  ) }
);

export type CreatePostMutationVariables = Exact<{
  textContent?: Maybe<Scalars['String']>;
  mediaContent?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & PostFragmentFragment
  ) }
);

export type CreateDialogMutationVariables = Exact<{
  input: CreateDialogInput;
}>;


export type CreateDialogMutation = (
  { __typename?: 'Mutation' }
  & { createDialog: (
    { __typename?: 'Chat' }
    & ChatFragmentFragment
  ) }
);

export type NewPostSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewPostSubscription = (
  { __typename?: 'Subscription' }
  & { newPost: (
    { __typename?: 'Post' }
    & PostFragmentFragment
  ) }
);

export type GetPostsQueryVariables = Exact<{
  author?: Maybe<Scalars['ID']>;
}>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { getPosts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & PostFragmentFragment
  )>>> }
);

export type GetUserQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser: (
    { __typename?: 'User' }
    & UserFragmentFragment
  ) }
);

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserByIdQuery = (
  { __typename?: 'Query' }
  & { getUserById?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'firstName' | 'lastName' | 'id'>
  )> }
);

export type GetUsersQueryVariables = Exact<{
  ids?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { getUsers?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
  )>>> }
);

export type AddFriendMutationVariables = Exact<{
  friendId: Scalars['ID'];
}>;


export type AddFriendMutation = (
  { __typename?: 'Mutation' }
  & { addFriend?: Maybe<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

export type RemoveFriendMutationVariables = Exact<{
  friendId: Scalars['ID'];
}>;


export type RemoveFriendMutation = (
  { __typename?: 'Mutation' }
  & { removeFriend?: Maybe<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

export type EditEmailMutationVariables = Exact<{
  newEmail: Scalars['String'];
}>;


export type EditEmailMutation = (
  { __typename?: 'Mutation' }
  & { editEmail: (
    { __typename?: 'User' }
    & UserFragmentFragment
  ) }
);

export type EditUserNameMutationVariables = Exact<{
  newFirstName: Scalars['String'];
  newLastName: Scalars['String'];
}>;


export type EditUserNameMutation = (
  { __typename?: 'Mutation' }
  & { editUsername: (
    { __typename?: 'User' }
    & UserFragmentFragment
  ) }
);

export type EditPasswordMutationVariables = Exact<{
  input: UpdatePasswordInput;
}>;


export type EditPasswordMutation = (
  { __typename?: 'Mutation' }
  & { editPassword: (
    { __typename?: 'User' }
    & UserFragmentFragment
  ) }
);

export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  firstName
  lastName
  email
  avatar
  theme
  friends {
    id
    firstName
    lastName
    email
    avatar
    friends {
      id
    }
  }
}
    `;
export const ChatFragmentFragmentDoc = gql`
    fragment ChatFragment on Chat {
  id
  participants {
    id
    firstName
    lastName
    avatar
  }
  createdAt
  isDialog
  title
  logo
  messages {
    id
    content {
      text
      media
    }
    author {
      id
      firstName
      lastName
    }
    createdAt
    chatId
    lastEdit
    readBy {
      id
    }
  }
}
    `;
export const MessageFragmentFragmentDoc = gql`
    fragment MessageFragment on Message {
  id
  content {
    text
    media
  }
  author {
    id
    firstName
    lastName
  }
  createdAt
  lastEdit
  chatId
  readBy {
    id
  }
}
    `;
export const CommentFragmentFragmentDoc = gql`
    fragment CommentFragment on Comment {
  id
  author {
    id
    firstName
    lastName
    avatar
  }
  content
  createdAt
  likes {
    id
  }
}
    `;
export const PostFragmentFragmentDoc = gql`
    fragment PostFragment on Post {
  id
  createdAt
  author {
    id
    firstName
    lastName
    avatar
  }
  textContent
  mediaContent
  likes {
    id
  }
  comments {
    id
  }
}
    `;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    token
    user {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetChatsDocument = gql`
    query GetChats {
  getChats {
    ...ChatFragment
  }
  getUser {
    id
  }
}
    ${ChatFragmentFragmentDoc}`;

/**
 * __useGetChatsQuery__
 *
 * To run a query within a React component, call `useGetChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChatsQuery(baseOptions?: Apollo.QueryHookOptions<GetChatsQuery, GetChatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatsQuery, GetChatsQueryVariables>(GetChatsDocument, options);
      }
export function useGetChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatsQuery, GetChatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatsQuery, GetChatsQueryVariables>(GetChatsDocument, options);
        }
export type GetChatsQueryHookResult = ReturnType<typeof useGetChatsQuery>;
export type GetChatsLazyQueryHookResult = ReturnType<typeof useGetChatsLazyQuery>;
export type GetChatsQueryResult = Apollo.QueryResult<GetChatsQuery, GetChatsQueryVariables>;
export const CreateChatDocument = gql`
    mutation CreateChat($input: CreateChatInput!) {
  createChat(input: $input) {
    ...ChatFragment
  }
}
    ${ChatFragmentFragmentDoc}`;
export type CreateChatMutationFn = Apollo.MutationFunction<CreateChatMutation, CreateChatMutationVariables>;

/**
 * __useCreateChatMutation__
 *
 * To run a mutation, you first call `useCreateChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatMutation, { data, loading, error }] = useCreateChatMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateChatMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatMutation, CreateChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChatMutation, CreateChatMutationVariables>(CreateChatDocument, options);
      }
export type CreateChatMutationHookResult = ReturnType<typeof useCreateChatMutation>;
export type CreateChatMutationResult = Apollo.MutationResult<CreateChatMutation>;
export type CreateChatMutationOptions = Apollo.BaseMutationOptions<CreateChatMutation, CreateChatMutationVariables>;
export const DeleteChatByIdDocument = gql`
    mutation DeleteChatById($chatId: ID!) {
  deleteChatById(chatId: $chatId) {
    ...ChatFragment
  }
}
    ${ChatFragmentFragmentDoc}`;
export type DeleteChatByIdMutationFn = Apollo.MutationFunction<DeleteChatByIdMutation, DeleteChatByIdMutationVariables>;

/**
 * __useDeleteChatByIdMutation__
 *
 * To run a mutation, you first call `useDeleteChatByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteChatByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteChatByIdMutation, { data, loading, error }] = useDeleteChatByIdMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useDeleteChatByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteChatByIdMutation, DeleteChatByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteChatByIdMutation, DeleteChatByIdMutationVariables>(DeleteChatByIdDocument, options);
      }
export type DeleteChatByIdMutationHookResult = ReturnType<typeof useDeleteChatByIdMutation>;
export type DeleteChatByIdMutationResult = Apollo.MutationResult<DeleteChatByIdMutation>;
export type DeleteChatByIdMutationOptions = Apollo.BaseMutationOptions<DeleteChatByIdMutation, DeleteChatByIdMutationVariables>;
export const MarkReadDocument = gql`
    mutation markRead($messageId: ID!) {
  markRead(messageId: $messageId) {
    ...MessageFragment
  }
}
    ${MessageFragmentFragmentDoc}`;
export type MarkReadMutationFn = Apollo.MutationFunction<MarkReadMutation, MarkReadMutationVariables>;

/**
 * __useMarkReadMutation__
 *
 * To run a mutation, you first call `useMarkReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markReadMutation, { data, loading, error }] = useMarkReadMutation({
 *   variables: {
 *      messageId: // value for 'messageId'
 *   },
 * });
 */
export function useMarkReadMutation(baseOptions?: Apollo.MutationHookOptions<MarkReadMutation, MarkReadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkReadMutation, MarkReadMutationVariables>(MarkReadDocument, options);
      }
export type MarkReadMutationHookResult = ReturnType<typeof useMarkReadMutation>;
export type MarkReadMutationResult = Apollo.MutationResult<MarkReadMutation>;
export type MarkReadMutationOptions = Apollo.BaseMutationOptions<MarkReadMutation, MarkReadMutationVariables>;
export const NewChatDocument = gql`
    subscription NewChat {
  newChat {
    ...ChatFragment
  }
}
    ${ChatFragmentFragmentDoc}`;

/**
 * __useNewChatSubscription__
 *
 * To run a query within a React component, call `useNewChatSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewChatSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewChatSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewChatSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewChatSubscription, NewChatSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewChatSubscription, NewChatSubscriptionVariables>(NewChatDocument, options);
      }
export type NewChatSubscriptionHookResult = ReturnType<typeof useNewChatSubscription>;
export type NewChatSubscriptionResult = Apollo.SubscriptionResult<NewChatSubscription>;
export const MessageEditedDocument = gql`
    subscription MessageEdited($chatId: ID!) {
  messageEdited(chatId: $chatId) {
    ...MessageFragment
  }
}
    ${MessageFragmentFragmentDoc}`;

/**
 * __useMessageEditedSubscription__
 *
 * To run a query within a React component, call `useMessageEditedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageEditedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageEditedSubscription({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useMessageEditedSubscription(baseOptions: Apollo.SubscriptionHookOptions<MessageEditedSubscription, MessageEditedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessageEditedSubscription, MessageEditedSubscriptionVariables>(MessageEditedDocument, options);
      }
export type MessageEditedSubscriptionHookResult = ReturnType<typeof useMessageEditedSubscription>;
export type MessageEditedSubscriptionResult = Apollo.SubscriptionResult<MessageEditedSubscription>;
export const ChatDeletedDocument = gql`
    subscription ChatDeleted {
  chatDeleted {
    ...ChatFragment
  }
}
    ${ChatFragmentFragmentDoc}`;

/**
 * __useChatDeletedSubscription__
 *
 * To run a query within a React component, call `useChatDeletedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatDeletedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatDeletedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useChatDeletedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ChatDeletedSubscription, ChatDeletedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ChatDeletedSubscription, ChatDeletedSubscriptionVariables>(ChatDeletedDocument, options);
      }
export type ChatDeletedSubscriptionHookResult = ReturnType<typeof useChatDeletedSubscription>;
export type ChatDeletedSubscriptionResult = Apollo.SubscriptionResult<ChatDeletedSubscription>;
export const GetChatByIdDocument = gql`
    query getChatById($chatId: ID!) {
  getChatById(chatId: $chatId) {
    ...ChatFragment
  }
  getUser {
    id
  }
}
    ${ChatFragmentFragmentDoc}`;

/**
 * __useGetChatByIdQuery__
 *
 * To run a query within a React component, call `useGetChatByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatByIdQuery({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useGetChatByIdQuery(baseOptions: Apollo.QueryHookOptions<GetChatByIdQuery, GetChatByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatByIdQuery, GetChatByIdQueryVariables>(GetChatByIdDocument, options);
      }
export function useGetChatByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatByIdQuery, GetChatByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatByIdQuery, GetChatByIdQueryVariables>(GetChatByIdDocument, options);
        }
export type GetChatByIdQueryHookResult = ReturnType<typeof useGetChatByIdQuery>;
export type GetChatByIdLazyQueryHookResult = ReturnType<typeof useGetChatByIdLazyQuery>;
export type GetChatByIdQueryResult = Apollo.QueryResult<GetChatByIdQuery, GetChatByIdQueryVariables>;
export const GetMessageByIdDocument = gql`
    query GetMessageById($messageId: ID!) {
  getMessageById(messageId: $messageId) {
    ...MessageFragment
  }
}
    ${MessageFragmentFragmentDoc}`;

/**
 * __useGetMessageByIdQuery__
 *
 * To run a query within a React component, call `useGetMessageByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessageByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessageByIdQuery({
 *   variables: {
 *      messageId: // value for 'messageId'
 *   },
 * });
 */
export function useGetMessageByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMessageByIdQuery, GetMessageByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessageByIdQuery, GetMessageByIdQueryVariables>(GetMessageByIdDocument, options);
      }
export function useGetMessageByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessageByIdQuery, GetMessageByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessageByIdQuery, GetMessageByIdQueryVariables>(GetMessageByIdDocument, options);
        }
export type GetMessageByIdQueryHookResult = ReturnType<typeof useGetMessageByIdQuery>;
export type GetMessageByIdLazyQueryHookResult = ReturnType<typeof useGetMessageByIdLazyQuery>;
export type GetMessageByIdQueryResult = Apollo.QueryResult<GetMessageByIdQuery, GetMessageByIdQueryVariables>;
export const CreateMessageDocument = gql`
    mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    ...MessageFragment
  }
}
    ${MessageFragmentFragmentDoc}`;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const DeleteMessageDocument = gql`
    mutation DeleteMessage($messageId: ID!) {
  deleteMessageById(messageId: $messageId) {
    ...MessageFragment
  }
}
    ${MessageFragmentFragmentDoc}`;
export type DeleteMessageMutationFn = Apollo.MutationFunction<DeleteMessageMutation, DeleteMessageMutationVariables>;

/**
 * __useDeleteMessageMutation__
 *
 * To run a mutation, you first call `useDeleteMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMessageMutation, { data, loading, error }] = useDeleteMessageMutation({
 *   variables: {
 *      messageId: // value for 'messageId'
 *   },
 * });
 */
export function useDeleteMessageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMessageMutation, DeleteMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMessageMutation, DeleteMessageMutationVariables>(DeleteMessageDocument, options);
      }
export type DeleteMessageMutationHookResult = ReturnType<typeof useDeleteMessageMutation>;
export type DeleteMessageMutationResult = Apollo.MutationResult<DeleteMessageMutation>;
export type DeleteMessageMutationOptions = Apollo.BaseMutationOptions<DeleteMessageMutation, DeleteMessageMutationVariables>;
export const EditMessageDocument = gql`
    mutation EditMessage($messageId: ID!, $newContent: String!) {
  editMessage(messageId: $messageId, newContent: $newContent) {
    ...MessageFragment
  }
}
    ${MessageFragmentFragmentDoc}`;
export type EditMessageMutationFn = Apollo.MutationFunction<EditMessageMutation, EditMessageMutationVariables>;

/**
 * __useEditMessageMutation__
 *
 * To run a mutation, you first call `useEditMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editMessageMutation, { data, loading, error }] = useEditMessageMutation({
 *   variables: {
 *      messageId: // value for 'messageId'
 *      newContent: // value for 'newContent'
 *   },
 * });
 */
export function useEditMessageMutation(baseOptions?: Apollo.MutationHookOptions<EditMessageMutation, EditMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditMessageMutation, EditMessageMutationVariables>(EditMessageDocument, options);
      }
export type EditMessageMutationHookResult = ReturnType<typeof useEditMessageMutation>;
export type EditMessageMutationResult = Apollo.MutationResult<EditMessageMutation>;
export type EditMessageMutationOptions = Apollo.BaseMutationOptions<EditMessageMutation, EditMessageMutationVariables>;
export const EditTitleDocument = gql`
    mutation EditTitle($input: UpdateChatTitle!) {
  editChatTitle(input: $input) {
    id
    title
  }
}
    `;
export type EditTitleMutationFn = Apollo.MutationFunction<EditTitleMutation, EditTitleMutationVariables>;

/**
 * __useEditTitleMutation__
 *
 * To run a mutation, you first call `useEditTitleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTitleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTitleMutation, { data, loading, error }] = useEditTitleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditTitleMutation(baseOptions?: Apollo.MutationHookOptions<EditTitleMutation, EditTitleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditTitleMutation, EditTitleMutationVariables>(EditTitleDocument, options);
      }
export type EditTitleMutationHookResult = ReturnType<typeof useEditTitleMutation>;
export type EditTitleMutationResult = Apollo.MutationResult<EditTitleMutation>;
export type EditTitleMutationOptions = Apollo.BaseMutationOptions<EditTitleMutation, EditTitleMutationVariables>;
export const UpdateChatLogoDocument = gql`
    mutation UpdateChatLogo($input: UpdateChatLogoInput!) {
  updateChatLogo(input: $input) {
    ...ChatFragment
  }
}
    ${ChatFragmentFragmentDoc}`;
export type UpdateChatLogoMutationFn = Apollo.MutationFunction<UpdateChatLogoMutation, UpdateChatLogoMutationVariables>;

/**
 * __useUpdateChatLogoMutation__
 *
 * To run a mutation, you first call `useUpdateChatLogoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateChatLogoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateChatLogoMutation, { data, loading, error }] = useUpdateChatLogoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateChatLogoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateChatLogoMutation, UpdateChatLogoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateChatLogoMutation, UpdateChatLogoMutationVariables>(UpdateChatLogoDocument, options);
      }
export type UpdateChatLogoMutationHookResult = ReturnType<typeof useUpdateChatLogoMutation>;
export type UpdateChatLogoMutationResult = Apollo.MutationResult<UpdateChatLogoMutation>;
export type UpdateChatLogoMutationOptions = Apollo.BaseMutationOptions<UpdateChatLogoMutation, UpdateChatLogoMutationVariables>;
export const ClearHistoryDocument = gql`
    mutation ClearHistory($chatId: ID!) {
  clearChatHistory(chatId: $chatId) {
    id
  }
}
    `;
export type ClearHistoryMutationFn = Apollo.MutationFunction<ClearHistoryMutation, ClearHistoryMutationVariables>;

/**
 * __useClearHistoryMutation__
 *
 * To run a mutation, you first call `useClearHistoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearHistoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearHistoryMutation, { data, loading, error }] = useClearHistoryMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useClearHistoryMutation(baseOptions?: Apollo.MutationHookOptions<ClearHistoryMutation, ClearHistoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ClearHistoryMutation, ClearHistoryMutationVariables>(ClearHistoryDocument, options);
      }
export type ClearHistoryMutationHookResult = ReturnType<typeof useClearHistoryMutation>;
export type ClearHistoryMutationResult = Apollo.MutationResult<ClearHistoryMutation>;
export type ClearHistoryMutationOptions = Apollo.BaseMutationOptions<ClearHistoryMutation, ClearHistoryMutationVariables>;
export const LeaveChatDocument = gql`
    mutation LeaveChat($chatId: ID!) {
  leaveChat(chatId: $chatId) {
    id
  }
}
    `;
export type LeaveChatMutationFn = Apollo.MutationFunction<LeaveChatMutation, LeaveChatMutationVariables>;

/**
 * __useLeaveChatMutation__
 *
 * To run a mutation, you first call `useLeaveChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLeaveChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [leaveChatMutation, { data, loading, error }] = useLeaveChatMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useLeaveChatMutation(baseOptions?: Apollo.MutationHookOptions<LeaveChatMutation, LeaveChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LeaveChatMutation, LeaveChatMutationVariables>(LeaveChatDocument, options);
      }
export type LeaveChatMutationHookResult = ReturnType<typeof useLeaveChatMutation>;
export type LeaveChatMutationResult = Apollo.MutationResult<LeaveChatMutation>;
export type LeaveChatMutationOptions = Apollo.BaseMutationOptions<LeaveChatMutation, LeaveChatMutationVariables>;
export const NewMessageDocument = gql`
    subscription NewMessage($chatId: ID!) {
  newMessage(chatId: $chatId) {
    ...MessageFragment
  }
}
    ${MessageFragmentFragmentDoc}`;

/**
 * __useNewMessageSubscription__
 *
 * To run a query within a React component, call `useNewMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessageSubscription({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useNewMessageSubscription(baseOptions: Apollo.SubscriptionHookOptions<NewMessageSubscription, NewMessageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewMessageSubscription, NewMessageSubscriptionVariables>(NewMessageDocument, options);
      }
export type NewMessageSubscriptionHookResult = ReturnType<typeof useNewMessageSubscription>;
export type NewMessageSubscriptionResult = Apollo.SubscriptionResult<NewMessageSubscription>;
export const MessageDeletedDocument = gql`
    subscription MessageDeleted($chatId: ID!) {
  messageDeleted(chatId: $chatId) {
    ...MessageFragment
  }
}
    ${MessageFragmentFragmentDoc}`;

/**
 * __useMessageDeletedSubscription__
 *
 * To run a query within a React component, call `useMessageDeletedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageDeletedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageDeletedSubscription({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useMessageDeletedSubscription(baseOptions: Apollo.SubscriptionHookOptions<MessageDeletedSubscription, MessageDeletedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessageDeletedSubscription, MessageDeletedSubscriptionVariables>(MessageDeletedDocument, options);
      }
export type MessageDeletedSubscriptionHookResult = ReturnType<typeof useMessageDeletedSubscription>;
export type MessageDeletedSubscriptionResult = Apollo.SubscriptionResult<MessageDeletedSubscription>;
export const GetFeedDocument = gql`
    query GetFeed {
  getAllPosts {
    id
    author {
      id
      firstName
      lastName
      avatar
    }
    createdAt
    textContent
    mediaContent
    likes {
      id
    }
    comments {
      id
    }
  }
}
    `;

/**
 * __useGetFeedQuery__
 *
 * To run a query within a React component, call `useGetFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeedQuery(baseOptions?: Apollo.QueryHookOptions<GetFeedQuery, GetFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeedQuery, GetFeedQueryVariables>(GetFeedDocument, options);
      }
export function useGetFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeedQuery, GetFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeedQuery, GetFeedQueryVariables>(GetFeedDocument, options);
        }
export type GetFeedQueryHookResult = ReturnType<typeof useGetFeedQuery>;
export type GetFeedLazyQueryHookResult = ReturnType<typeof useGetFeedLazyQuery>;
export type GetFeedQueryResult = Apollo.QueryResult<GetFeedQuery, GetFeedQueryVariables>;
export const GetFriendFeedDocument = gql`
    query GetFriendFeed {
  getFriendPosts {
    id
    author {
      id
      firstName
      lastName
      avatar
    }
    createdAt
    textContent
    mediaContent
    likes {
      id
    }
    comments {
      id
    }
  }
}
    `;

/**
 * __useGetFriendFeedQuery__
 *
 * To run a query within a React component, call `useGetFriendFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFriendFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFriendFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFriendFeedQuery(baseOptions?: Apollo.QueryHookOptions<GetFriendFeedQuery, GetFriendFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFriendFeedQuery, GetFriendFeedQueryVariables>(GetFriendFeedDocument, options);
      }
export function useGetFriendFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFriendFeedQuery, GetFriendFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFriendFeedQuery, GetFriendFeedQueryVariables>(GetFriendFeedDocument, options);
        }
export type GetFriendFeedQueryHookResult = ReturnType<typeof useGetFriendFeedQuery>;
export type GetFriendFeedLazyQueryHookResult = ReturnType<typeof useGetFriendFeedLazyQuery>;
export type GetFriendFeedQueryResult = Apollo.QueryResult<GetFriendFeedQuery, GetFriendFeedQueryVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($postId: ID!, $content: String!) {
  createComment(postId: $postId, content: $content) {
    id
    author {
      id
      firstName
      lastName
      avatar
    }
    content
    createdAt
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const DeleteCommentByIdDocument = gql`
    mutation DeleteCommentById($id: ID!) {
  deleteCommentById(id: $id) {
    id
    author {
      id
      firstName
      lastName
      avatar
    }
    content
    createdAt
  }
}
    `;
export type DeleteCommentByIdMutationFn = Apollo.MutationFunction<DeleteCommentByIdMutation, DeleteCommentByIdMutationVariables>;

/**
 * __useDeleteCommentByIdMutation__
 *
 * To run a mutation, you first call `useDeleteCommentByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentByIdMutation, { data, loading, error }] = useDeleteCommentByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCommentByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentByIdMutation, DeleteCommentByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentByIdMutation, DeleteCommentByIdMutationVariables>(DeleteCommentByIdDocument, options);
      }
export type DeleteCommentByIdMutationHookResult = ReturnType<typeof useDeleteCommentByIdMutation>;
export type DeleteCommentByIdMutationResult = Apollo.MutationResult<DeleteCommentByIdMutation>;
export type DeleteCommentByIdMutationOptions = Apollo.BaseMutationOptions<DeleteCommentByIdMutation, DeleteCommentByIdMutationVariables>;
export const LikeCommentDocument = gql`
    mutation LikeComment($commentId: ID!) {
  likeComment(commentId: $commentId) {
    ...CommentFragment
  }
}
    ${CommentFragmentFragmentDoc}`;
export type LikeCommentMutationFn = Apollo.MutationFunction<LikeCommentMutation, LikeCommentMutationVariables>;

/**
 * __useLikeCommentMutation__
 *
 * To run a mutation, you first call `useLikeCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeCommentMutation, { data, loading, error }] = useLikeCommentMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useLikeCommentMutation(baseOptions?: Apollo.MutationHookOptions<LikeCommentMutation, LikeCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeCommentMutation, LikeCommentMutationVariables>(LikeCommentDocument, options);
      }
export type LikeCommentMutationHookResult = ReturnType<typeof useLikeCommentMutation>;
export type LikeCommentMutationResult = Apollo.MutationResult<LikeCommentMutation>;
export type LikeCommentMutationOptions = Apollo.BaseMutationOptions<LikeCommentMutation, LikeCommentMutationVariables>;
export const EditCommentDocument = gql`
    mutation EditComment($commentId: ID!, $textContent: String!) {
  editComment(commentId: $commentId, textContent: $textContent) {
    ...CommentFragment
  }
}
    ${CommentFragmentFragmentDoc}`;
export type EditCommentMutationFn = Apollo.MutationFunction<EditCommentMutation, EditCommentMutationVariables>;

/**
 * __useEditCommentMutation__
 *
 * To run a mutation, you first call `useEditCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCommentMutation, { data, loading, error }] = useEditCommentMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *      textContent: // value for 'textContent'
 *   },
 * });
 */
export function useEditCommentMutation(baseOptions?: Apollo.MutationHookOptions<EditCommentMutation, EditCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCommentMutation, EditCommentMutationVariables>(EditCommentDocument, options);
      }
export type EditCommentMutationHookResult = ReturnType<typeof useEditCommentMutation>;
export type EditCommentMutationResult = Apollo.MutationResult<EditCommentMutation>;
export type EditCommentMutationOptions = Apollo.BaseMutationOptions<EditCommentMutation, EditCommentMutationVariables>;
export const GetCommentByIdDocument = gql`
    query GetCommentById($id: ID!) {
  getComment(id: $id) {
    ...CommentFragment
  }
  getUser {
    id
  }
}
    ${CommentFragmentFragmentDoc}`;

/**
 * __useGetCommentByIdQuery__
 *
 * To run a query within a React component, call `useGetCommentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCommentByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCommentByIdQuery, GetCommentByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentByIdQuery, GetCommentByIdQueryVariables>(GetCommentByIdDocument, options);
      }
export function useGetCommentByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentByIdQuery, GetCommentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentByIdQuery, GetCommentByIdQueryVariables>(GetCommentByIdDocument, options);
        }
export type GetCommentByIdQueryHookResult = ReturnType<typeof useGetCommentByIdQuery>;
export type GetCommentByIdLazyQueryHookResult = ReturnType<typeof useGetCommentByIdLazyQuery>;
export type GetCommentByIdQueryResult = Apollo.QueryResult<GetCommentByIdQuery, GetCommentByIdQueryVariables>;
export const GetPostByIdDocument = gql`
    query GetPostById($id: ID!) {
  getPost(id: $id) {
    id
    likes {
      id
    }
    author {
      id
      firstName
      lastName
      avatar
    }
    comments {
      ...CommentFragment
    }
    createdAt
    textContent
    mediaContent
  }
}
    ${CommentFragmentFragmentDoc}`;

/**
 * __useGetPostByIdQuery__
 *
 * To run a query within a React component, call `useGetPostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, options);
      }
export function useGetPostByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, options);
        }
export type GetPostByIdQueryHookResult = ReturnType<typeof useGetPostByIdQuery>;
export type GetPostByIdLazyQueryHookResult = ReturnType<typeof useGetPostByIdLazyQuery>;
export type GetPostByIdQueryResult = Apollo.QueryResult<GetPostByIdQuery, GetPostByIdQueryVariables>;
export const ToggleLikeDocument = gql`
    mutation ToggleLike($id: ID!) {
  toggleLike(id: $id) {
    id
    likes {
      id
    }
    author {
      id
    }
  }
}
    `;
export type ToggleLikeMutationFn = Apollo.MutationFunction<ToggleLikeMutation, ToggleLikeMutationVariables>;

/**
 * __useToggleLikeMutation__
 *
 * To run a mutation, you first call `useToggleLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeMutation, { data, loading, error }] = useToggleLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleLikeMutation(baseOptions?: Apollo.MutationHookOptions<ToggleLikeMutation, ToggleLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleLikeMutation, ToggleLikeMutationVariables>(ToggleLikeDocument, options);
      }
export type ToggleLikeMutationHookResult = ReturnType<typeof useToggleLikeMutation>;
export type ToggleLikeMutationResult = Apollo.MutationResult<ToggleLikeMutation>;
export type ToggleLikeMutationOptions = Apollo.BaseMutationOptions<ToggleLikeMutation, ToggleLikeMutationVariables>;
export const EditPostDocument = gql`
    mutation EditPost($postId: ID!, $textContent: String, $mediaContent: [String!]) {
  editPost(
    postId: $postId
    textContent: $textContent
    mediaContent: $mediaContent
  ) {
    id
    likes {
      id
    }
    author {
      id
      firstName
      lastName
      avatar
    }
    comments {
      ...CommentFragment
    }
    createdAt
    textContent
    mediaContent
  }
}
    ${CommentFragmentFragmentDoc}`;
export type EditPostMutationFn = Apollo.MutationFunction<EditPostMutation, EditPostMutationVariables>;

/**
 * __useEditPostMutation__
 *
 * To run a mutation, you first call `useEditPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPostMutation, { data, loading, error }] = useEditPostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      textContent: // value for 'textContent'
 *      mediaContent: // value for 'mediaContent'
 *   },
 * });
 */
export function useEditPostMutation(baseOptions?: Apollo.MutationHookOptions<EditPostMutation, EditPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPostMutation, EditPostMutationVariables>(EditPostDocument, options);
      }
export type EditPostMutationHookResult = ReturnType<typeof useEditPostMutation>;
export type EditPostMutationResult = Apollo.MutationResult<EditPostMutation>;
export type EditPostMutationOptions = Apollo.BaseMutationOptions<EditPostMutation, EditPostMutationVariables>;
export const DeletePostByIdDocument = gql`
    mutation DeletePostById($postId: ID!) {
  deletePostById(postId: $postId) {
    id
  }
}
    `;
export type DeletePostByIdMutationFn = Apollo.MutationFunction<DeletePostByIdMutation, DeletePostByIdMutationVariables>;

/**
 * __useDeletePostByIdMutation__
 *
 * To run a mutation, you first call `useDeletePostByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostByIdMutation, { data, loading, error }] = useDeletePostByIdMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeletePostByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostByIdMutation, DeletePostByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostByIdMutation, DeletePostByIdMutationVariables>(DeletePostByIdDocument, options);
      }
export type DeletePostByIdMutationHookResult = ReturnType<typeof useDeletePostByIdMutation>;
export type DeletePostByIdMutationResult = Apollo.MutationResult<DeletePostByIdMutation>;
export type DeletePostByIdMutationOptions = Apollo.BaseMutationOptions<DeletePostByIdMutation, DeletePostByIdMutationVariables>;
export const UpdateAvatarDocument = gql`
    mutation UpdateAvatar($avatarId: String) {
  updateAvatar(avatarId: $avatarId) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type UpdateAvatarMutationFn = Apollo.MutationFunction<UpdateAvatarMutation, UpdateAvatarMutationVariables>;

/**
 * __useUpdateAvatarMutation__
 *
 * To run a mutation, you first call `useUpdateAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAvatarMutation, { data, loading, error }] = useUpdateAvatarMutation({
 *   variables: {
 *      avatarId: // value for 'avatarId'
 *   },
 * });
 */
export function useUpdateAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAvatarMutation, UpdateAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAvatarMutation, UpdateAvatarMutationVariables>(UpdateAvatarDocument, options);
      }
export type UpdateAvatarMutationHookResult = ReturnType<typeof useUpdateAvatarMutation>;
export type UpdateAvatarMutationResult = Apollo.MutationResult<UpdateAvatarMutation>;
export type UpdateAvatarMutationOptions = Apollo.BaseMutationOptions<UpdateAvatarMutation, UpdateAvatarMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($textContent: String, $mediaContent: [String!]) {
  createPost(textContent: $textContent, mediaContent: $mediaContent) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      textContent: // value for 'textContent'
 *      mediaContent: // value for 'mediaContent'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const CreateDialogDocument = gql`
    mutation CreateDialog($input: CreateDialogInput!) {
  createDialog(input: $input) {
    ...ChatFragment
  }
}
    ${ChatFragmentFragmentDoc}`;
export type CreateDialogMutationFn = Apollo.MutationFunction<CreateDialogMutation, CreateDialogMutationVariables>;

/**
 * __useCreateDialogMutation__
 *
 * To run a mutation, you first call `useCreateDialogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDialogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDialogMutation, { data, loading, error }] = useCreateDialogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDialogMutation(baseOptions?: Apollo.MutationHookOptions<CreateDialogMutation, CreateDialogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDialogMutation, CreateDialogMutationVariables>(CreateDialogDocument, options);
      }
export type CreateDialogMutationHookResult = ReturnType<typeof useCreateDialogMutation>;
export type CreateDialogMutationResult = Apollo.MutationResult<CreateDialogMutation>;
export type CreateDialogMutationOptions = Apollo.BaseMutationOptions<CreateDialogMutation, CreateDialogMutationVariables>;
export const NewPostDocument = gql`
    subscription NewPost {
  newPost {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;

/**
 * __useNewPostSubscription__
 *
 * To run a query within a React component, call `useNewPostSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewPostSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewPostSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewPostSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewPostSubscription, NewPostSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewPostSubscription, NewPostSubscriptionVariables>(NewPostDocument, options);
      }
export type NewPostSubscriptionHookResult = ReturnType<typeof useNewPostSubscription>;
export type NewPostSubscriptionResult = Apollo.SubscriptionResult<NewPostSubscription>;
export const GetPostsDocument = gql`
    query GetPosts($author: ID) {
  getPosts(author: $author) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      author: // value for 'author'
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: ID) {
  getUser(id: $id) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserByID($id: ID!) {
  getUserById(id: $id) {
    firstName
    lastName
    id
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers($ids: [ID!]) {
  getUsers(ids: $ids) {
    id
    firstName
    lastName
    avatar
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const AddFriendDocument = gql`
    mutation AddFriend($friendId: ID!) {
  addFriend(friendId: $friendId) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type AddFriendMutationFn = Apollo.MutationFunction<AddFriendMutation, AddFriendMutationVariables>;

/**
 * __useAddFriendMutation__
 *
 * To run a mutation, you first call `useAddFriendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFriendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFriendMutation, { data, loading, error }] = useAddFriendMutation({
 *   variables: {
 *      friendId: // value for 'friendId'
 *   },
 * });
 */
export function useAddFriendMutation(baseOptions?: Apollo.MutationHookOptions<AddFriendMutation, AddFriendMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFriendMutation, AddFriendMutationVariables>(AddFriendDocument, options);
      }
export type AddFriendMutationHookResult = ReturnType<typeof useAddFriendMutation>;
export type AddFriendMutationResult = Apollo.MutationResult<AddFriendMutation>;
export type AddFriendMutationOptions = Apollo.BaseMutationOptions<AddFriendMutation, AddFriendMutationVariables>;
export const RemoveFriendDocument = gql`
    mutation RemoveFriend($friendId: ID!) {
  removeFriend(friendId: $friendId) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type RemoveFriendMutationFn = Apollo.MutationFunction<RemoveFriendMutation, RemoveFriendMutationVariables>;

/**
 * __useRemoveFriendMutation__
 *
 * To run a mutation, you first call `useRemoveFriendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFriendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFriendMutation, { data, loading, error }] = useRemoveFriendMutation({
 *   variables: {
 *      friendId: // value for 'friendId'
 *   },
 * });
 */
export function useRemoveFriendMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFriendMutation, RemoveFriendMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFriendMutation, RemoveFriendMutationVariables>(RemoveFriendDocument, options);
      }
export type RemoveFriendMutationHookResult = ReturnType<typeof useRemoveFriendMutation>;
export type RemoveFriendMutationResult = Apollo.MutationResult<RemoveFriendMutation>;
export type RemoveFriendMutationOptions = Apollo.BaseMutationOptions<RemoveFriendMutation, RemoveFriendMutationVariables>;
export const EditEmailDocument = gql`
    mutation EditEmail($newEmail: String!) {
  editEmail(newEmail: $newEmail) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type EditEmailMutationFn = Apollo.MutationFunction<EditEmailMutation, EditEmailMutationVariables>;

/**
 * __useEditEmailMutation__
 *
 * To run a mutation, you first call `useEditEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editEmailMutation, { data, loading, error }] = useEditEmailMutation({
 *   variables: {
 *      newEmail: // value for 'newEmail'
 *   },
 * });
 */
export function useEditEmailMutation(baseOptions?: Apollo.MutationHookOptions<EditEmailMutation, EditEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditEmailMutation, EditEmailMutationVariables>(EditEmailDocument, options);
      }
export type EditEmailMutationHookResult = ReturnType<typeof useEditEmailMutation>;
export type EditEmailMutationResult = Apollo.MutationResult<EditEmailMutation>;
export type EditEmailMutationOptions = Apollo.BaseMutationOptions<EditEmailMutation, EditEmailMutationVariables>;
export const EditUserNameDocument = gql`
    mutation EditUserName($newFirstName: String!, $newLastName: String!) {
  editUsername(newFirstName: $newFirstName, newLastName: $newLastName) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type EditUserNameMutationFn = Apollo.MutationFunction<EditUserNameMutation, EditUserNameMutationVariables>;

/**
 * __useEditUserNameMutation__
 *
 * To run a mutation, you first call `useEditUserNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserNameMutation, { data, loading, error }] = useEditUserNameMutation({
 *   variables: {
 *      newFirstName: // value for 'newFirstName'
 *      newLastName: // value for 'newLastName'
 *   },
 * });
 */
export function useEditUserNameMutation(baseOptions?: Apollo.MutationHookOptions<EditUserNameMutation, EditUserNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditUserNameMutation, EditUserNameMutationVariables>(EditUserNameDocument, options);
      }
export type EditUserNameMutationHookResult = ReturnType<typeof useEditUserNameMutation>;
export type EditUserNameMutationResult = Apollo.MutationResult<EditUserNameMutation>;
export type EditUserNameMutationOptions = Apollo.BaseMutationOptions<EditUserNameMutation, EditUserNameMutationVariables>;
export const EditPasswordDocument = gql`
    mutation EditPassword($input: UpdatePasswordInput!) {
  editPassword(input: $input) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type EditPasswordMutationFn = Apollo.MutationFunction<EditPasswordMutation, EditPasswordMutationVariables>;

/**
 * __useEditPasswordMutation__
 *
 * To run a mutation, you first call `useEditPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPasswordMutation, { data, loading, error }] = useEditPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditPasswordMutation(baseOptions?: Apollo.MutationHookOptions<EditPasswordMutation, EditPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPasswordMutation, EditPasswordMutationVariables>(EditPasswordDocument, options);
      }
export type EditPasswordMutationHookResult = ReturnType<typeof useEditPasswordMutation>;
export type EditPasswordMutationResult = Apollo.MutationResult<EditPasswordMutation>;
export type EditPasswordMutationOptions = Apollo.BaseMutationOptions<EditPasswordMutation, EditPasswordMutationVariables>;