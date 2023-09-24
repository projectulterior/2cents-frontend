/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Time: { input: any; output: any; }
};

export type AddMembersInput = {
  channelID: Scalars['ID']['input'];
  memberID: Scalars['ID']['input'];
  memberIDs: Array<Scalars['ID']['input']>;
};

export type Birthday = {
  __typename?: 'Birthday';
  day: Scalars['Int']['output'];
  month: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

export type BirthdayInput = {
  day?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type Cents = {
  __typename?: 'Cents';
  deposited: Scalars['Int']['output'];
  earned: Scalars['Int']['output'];
  given: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Channel = {
  __typename?: 'Channel';
  createdAt?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  members?: Maybe<Array<User>>;
  messages?: Maybe<Messages>;
  updatedAt?: Maybe<Scalars['Time']['output']>;
};


export type ChannelMessagesArgs = {
  page: Pagination;
};

export type ChannelCreateInput = {
  memberIDs: Array<Scalars['ID']['input']>;
};

export type Channels = {
  __typename?: 'Channels';
  channels: Array<Channel>;
  next?: Maybe<Scalars['String']['output']>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  commentLikes?: Maybe<CommentLikes>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  post?: Maybe<Post>;
};


export type CommentCommentLikesArgs = {
  page: Pagination;
};

export type CommentCreateInput = {
  content: Scalars['String']['input'];
  contentType: ContentType;
  postID: Scalars['ID']['input'];
};

export type CommentLike = {
  __typename?: 'CommentLike';
  comment?: Maybe<Comment>;
  createdAt?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  liker?: Maybe<User>;
};

export type CommentLikes = {
  __typename?: 'CommentLikes';
  commentLikes: Array<CommentLike>;
  next?: Maybe<Scalars['String']['output']>;
};

export type CommentUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentType?: InputMaybe<ContentType>;
};

export type Comments = {
  __typename?: 'Comments';
  comments: Array<Comment>;
  next: Scalars['String']['output'];
};

export enum ContentType {
  Image = 'IMAGE',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export type Follow = {
  __typename?: 'Follow';
  createdAt?: Maybe<Scalars['Time']['output']>;
  followee?: Maybe<User>;
  follower?: Maybe<User>;
  id: Scalars['ID']['output'];
};

export type Follows = {
  __typename?: 'Follows';
  follows: Array<Follow>;
  next?: Maybe<Scalars['String']['output']>;
};

export type Like = {
  __typename?: 'Like';
  createdAt?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  liker?: Maybe<User>;
  post?: Maybe<Post>;
};

export type Likes = {
  __typename?: 'Likes';
  likes: Array<Like>;
  next: Scalars['String']['output'];
};

export type Message = {
  __typename?: 'Message';
  channel: Channel;
  content?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<ContentType>;
  createdAt?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  sender?: Maybe<User>;
};

export type MessageCreateInput = {
  channelID: Scalars['ID']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  contentType?: InputMaybe<ContentType>;
  senderID: Scalars['ID']['input'];
};

export type MessageUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentType?: InputMaybe<ContentType>;
  messageID: Scalars['ID']['input'];
  senderID: Scalars['ID']['input'];
};

export type Messages = {
  __typename?: 'Messages';
  messages?: Maybe<Array<Message>>;
  next?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  channelAddMembers: Channel;
  channelCreate: Channel;
  channelDelete: Channel;
  commentCreate: Comment;
  commentDelete: Comment;
  commentLike: CommentLike;
  commentUpdate: Comment;
  messageCreate: Message;
  messageDelete: Message;
  messageRead: Message;
  messageUpdate: Message;
  postCreate: Post;
  postDelete: Post;
  postLike: Like;
  postUpdate: Post;
  userDelete: User;
  userFollow: Follow;
  userUpdate: User;
};


export type MutationChannelAddMembersArgs = {
  id: Scalars['ID']['input'];
  input: AddMembersInput;
};


export type MutationChannelCreateArgs = {
  input: ChannelCreateInput;
};


export type MutationChannelDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCommentCreateArgs = {
  input: CommentCreateInput;
};


export type MutationCommentDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCommentLikeArgs = {
  id: Scalars['ID']['input'];
  isLike: Scalars['Boolean']['input'];
};


export type MutationCommentUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CommentUpdateInput;
};


export type MutationMessageCreateArgs = {
  input: MessageCreateInput;
};


export type MutationMessageDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMessageReadArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMessageUpdateArgs = {
  id: Scalars['ID']['input'];
  input: MessageUpdateInput;
};


export type MutationPostCreateArgs = {
  input: PostCreateInput;
};


export type MutationPostDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPostLikeArgs = {
  id: Scalars['ID']['input'];
  isLike: Scalars['Boolean']['input'];
};


export type MutationPostUpdateArgs = {
  id: Scalars['ID']['input'];
  input: PostUpdateInput;
};


export type MutationUserFollowArgs = {
  id: Scalars['ID']['input'];
  isFollow: Scalars['Boolean']['input'];
};


export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
};

export type Notifications = {
  __typename?: 'Notifications';
  messages?: Maybe<Scalars['Int']['output']>;
};

export type Pagination = {
  cursor: Scalars['String']['input'];
  limit: Scalars['Int']['input'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  comments?: Maybe<Comments>;
  content?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<ContentType>;
  createdAt?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  like?: Maybe<Like>;
  likes?: Maybe<Likes>;
  updatedAt?: Maybe<Scalars['Time']['output']>;
  visibility?: Maybe<Visibility>;
};


export type PostCommentsArgs = {
  page: Pagination;
};


export type PostLikesArgs = {
  page: Pagination;
};

export type PostCreateInput = {
  content: Scalars['String']['input'];
  contentType: ContentType;
  visibility: Visibility;
};

export type PostUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentType?: InputMaybe<ContentType>;
  visibility?: InputMaybe<Visibility>;
};

export type Posts = {
  __typename?: 'Posts';
  next: Scalars['String']['output'];
  posts: Array<Post>;
};

export type Query = {
  __typename?: 'Query';
  channel: Channel;
  channelByMembers: Channel;
  channels: Channels;
  /** Returns the comment specified by id */
  comment: Comment;
  commentLike: CommentLike;
  commentLikes: CommentLikes;
  /** Returns all comments in 2cents */
  comments: Comments;
  follow: Follow;
  follows: Follows;
  like: Like;
  likes: Likes;
  messages: Messages;
  notifications: Notifications;
  /** Returns the post specified by id */
  post: Post;
  /** Returns all posts in 2cents */
  posts: Posts;
  /** Returns posts cater towards the auth user */
  postsDiscovery: Posts;
  /** Returns posts created by the auth user's following */
  postsFollowing: Posts;
  /** Returns the user specified by id. If empty, auth user */
  user: User;
  /** Returns all users in 2cents */
  users: Users;
};


export type QueryChannelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryChannelByMembersArgs = {
  members: Array<Scalars['ID']['input']>;
};


export type QueryChannelsArgs = {
  page: Pagination;
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentLikeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentLikesArgs = {
  page: Pagination;
};


export type QueryCommentsArgs = {
  page: Pagination;
};


export type QueryFollowArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFollowsArgs = {
  page: Pagination;
};


export type QueryLikeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLikesArgs = {
  page: Pagination;
};


export type QueryMessagesArgs = {
  id: Scalars['ID']['input'];
  page: Pagination;
};


export type QueryNotificationsArgs = {
  page?: InputMaybe<Pagination>;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  page: Pagination;
};


export type QueryPostsDiscoveryArgs = {
  page: Pagination;
};


export type QueryPostsFollowingArgs = {
  page: Pagination;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersArgs = {
  page: Pagination;
};

export type Subscription = {
  __typename?: 'Subscription';
  onChannelUpdated: Channel;
  onUserUpdated: User;
};


export type SubscriptionOnUserUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Birthday>;
  cents?: Maybe<Cents>;
  cover?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  follows?: Maybe<Follows>;
  id: Scalars['ID']['output'];
  likes?: Maybe<Likes>;
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Posts>;
  profile?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};


export type UserFollowsArgs = {
  page?: InputMaybe<Pagination>;
};


export type UserLikesArgs = {
  page?: InputMaybe<Pagination>;
};


export type UserPostsArgs = {
  page?: InputMaybe<Pagination>;
};

export type UserUpdateInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<BirthdayInput>;
  cover?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Scalars['String']['input']>;
};

export type Users = {
  __typename?: 'Users';
  next: Scalars['String']['output'];
  users: Array<User>;
};

export enum Visibility {
  Friends = 'FRIENDS',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CorePostFieldsFragment = { __typename?: 'Post', id: string, content?: string | null, contentType?: ContentType | null, createdAt?: any | null, updatedAt?: any | null, author?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'CoreUserFieldsFragment': CoreUserFieldsFragment } }
  ) | null, like?: { __typename?: 'Like', id: string, createdAt?: any | null } | null } & { ' $fragmentName'?: 'CorePostFieldsFragment' };

export type PostsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  page: Pagination;
}>;


export type PostsQuery = { __typename?: 'Query', posts: { __typename?: 'Posts', next: string, posts: Array<(
      { __typename?: 'Post' }
      & { ' $fragmentRefs'?: { 'CorePostFieldsFragment': CorePostFieldsFragment } }
    )> } };

export type PostQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PostQuery = { __typename?: 'Query', post: (
    { __typename?: 'Post' }
    & { ' $fragmentRefs'?: { 'CorePostFieldsFragment': CorePostFieldsFragment } }
  ) };

export type PostCreateMutationVariables = Exact<{
  input: PostCreateInput;
}>;


export type PostCreateMutation = { __typename?: 'Mutation', postCreate: (
    { __typename?: 'Post' }
    & { ' $fragmentRefs'?: { 'CorePostFieldsFragment': CorePostFieldsFragment } }
  ) };

export type CoreUserFieldsFragment = { __typename?: 'User', id: string, username?: string | null, name?: string | null, bio?: string | null, email?: string | null, profile?: string | null, cover?: string | null } & { ' $fragmentName'?: 'CoreUserFieldsFragment' };

export type GetUserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetUserQuery = { __typename?: 'Query', user: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'CoreUserFieldsFragment': CoreUserFieldsFragment } }
  ) };

export type UserUpdateMutationVariables = Exact<{
  input: UserUpdateInput;
}>;


export type UserUpdateMutation = { __typename?: 'Mutation', userUpdate: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'CoreUserFieldsFragment': CoreUserFieldsFragment } }
  ) };

export const CoreUserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}}]}}]} as unknown as DocumentNode<CoreUserFieldsFragment, unknown>;
export const CorePostFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CorePostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"like"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}}]}}]} as unknown as DocumentNode<CorePostFieldsFragment, unknown>;
export const PostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Posts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CorePostFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CorePostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"like"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<PostsQuery, PostsQueryVariables>;
export const PostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Post"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CorePostFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CorePostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"like"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<PostQuery, PostQueryVariables>;
export const PostCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PostCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CorePostFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CorePostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"like"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<PostCreateMutation, PostCreateMutationVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const UserUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}}]}}]} as unknown as DocumentNode<UserUpdateMutation, UserUpdateMutationVariables>;