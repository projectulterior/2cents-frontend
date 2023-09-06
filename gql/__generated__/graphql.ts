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
  id: Scalars['ID']['output'];
  members?: Maybe<Array<User>>;
  messages?: Maybe<Messages>;
};


export type ChannelMessagesArgs = {
  page: Pagination;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  post?: Maybe<Post>;
};

export type CommentCreateInput = {
  content: Scalars['String']['input'];
  contentType: ContentType;
  postID: Scalars['ID']['input'];
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
  content?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<ContentType>;
  createdAt?: Maybe<Scalars['Time']['output']>;
  sender?: Maybe<User>;
};

export type Messages = {
  __typename?: 'Messages';
  messages?: Maybe<Array<Message>>;
  next?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  commentCreate: Comment;
  commentDelete: Comment;
  commentUpdate: Comment;
  likeCreate: Like;
  likeDelete: Like;
  postCreate: Post;
  postDelete: Post;
  postUpdate: Post;
  userDelete: User;
  userFollow: Follow;
  userUpdate: User;
};


export type MutationCommentCreateArgs = {
  input: CommentCreateInput;
};


export type MutationCommentDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCommentUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CommentUpdateInput;
};


export type MutationLikeCreateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLikeDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPostCreateArgs = {
  input: PostCreateInput;
};


export type MutationPostDeleteArgs = {
  id: Scalars['ID']['input'];
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
  comment: Comment;
  comments: Comments;
  like: Like;
  likes: Likes;
  post: Post;
  posts: Posts;
  user: User;
  users: Users;
};


export type QueryChannelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryChannelByMembersArgs = {
  members: Array<Scalars['ID']['input']>;
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentsArgs = {
  page: Pagination;
};


export type QueryLikeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLikesArgs = {
  page: Pagination;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostsArgs = {
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

export type CoreUserFieldsFragment = { __typename?: 'User', id: string, username?: string | null, name?: string | null, bio?: string | null, profile?: string | null, cover?: string | null } & { ' $fragmentName'?: 'CoreUserFieldsFragment' };

export type GetUserQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetUserQuery = { __typename?: 'Query', user: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'CoreUserFieldsFragment': CoreUserFieldsFragment } }
  ) };

export const CoreUserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profile"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}}]}}]} as unknown as DocumentNode<CoreUserFieldsFragment, unknown>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profile"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;