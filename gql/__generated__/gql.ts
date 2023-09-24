/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment CoreMessageFields on Message {\n        id\n        sender {\n            ...CoreUserFields\n        }\n        contentType\n        content\n        createdAt\n    }\n": types.CoreMessageFieldsFragmentDoc,
    "\n    fragment CoreChannelFields on Channel {\n        id\n        createdAt\n        members {\n            ...CoreUserFields\n        }\n        messages(page: $messagesPage) {\n            messages {\n                ...CoreMessageFields\n            }\n            next\n        }\n        updatedAt\n    }\n": types.CoreChannelFieldsFragmentDoc,
    "\n    query Channels($page: Pagination!, $messagesPage: Pagination!) {\n        channels(page: $page) {\n            channels {\n                ...CoreChannelFields\n            }\n            next\n        }\n    }\n": types.ChannelsDocument,
    "\n    fragment CorePostFields on Post {\n        id\n        author {\n            ...CoreUserFields\n        }\n        content\n        contentType\n        createdAt\n        updatedAt\n\n        like {\n            id\n            createdAt\n        }\n    }\n": types.CorePostFieldsFragmentDoc,
    "\n    query Posts($id: ID, $page: Pagination!) {\n        posts(id: $id, page: $page) {\n            posts {\n                ...CorePostFields\n            }\n            next\n        }\n    }\n": types.PostsDocument,
    "\n    query Post($id: ID!) {\n        post(id: $id) {\n            ...CorePostFields\n        }\n    }\n": types.PostDocument,
    "\n    mutation PostCreate($input: PostCreateInput!) {\n        postCreate(input: $input) {\n            ...CorePostFields\n        }\n    }\n": types.PostCreateDocument,
    "\n    fragment CoreUserFields on User {\n        id\n        username\n        name\n        bio\n        email\n        profile\n        cover\n    }\n": types.CoreUserFieldsFragmentDoc,
    "\n    query GetUser($id: ID) {\n        user(id: $id) {\n            ...CoreUserFields\n        }\n    }\n": types.GetUserDocument,
    "\n    mutation UserUpdate($input: UserUpdateInput!) {\n        userUpdate(input: $input) {\n            ...CoreUserFields\n        }\n    }\n": types.UserUpdateDocument,
<<<<<<< HEAD
    "\n    mutation PasswordUpdate($old: String!, $new: String!) {\n        passwordUpdate(old: $old, new: $new)\n    }\n": types.PasswordUpdateDocument,
=======
    "\n    query SearchUsers($query: String!, $page: Pagination!) {\n        searchUsers(query: $query, page: $page) {\n            next\n            users {\n                ...CoreUserFields\n            }\n        }\n    }\n": types.SearchUsersDocument,
>>>>>>> a811e43090cb29f417befb2afcc388c988f619dd
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment CoreMessageFields on Message {\n        id\n        sender {\n            ...CoreUserFields\n        }\n        contentType\n        content\n        createdAt\n    }\n"): (typeof documents)["\n    fragment CoreMessageFields on Message {\n        id\n        sender {\n            ...CoreUserFields\n        }\n        contentType\n        content\n        createdAt\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment CoreChannelFields on Channel {\n        id\n        createdAt\n        members {\n            ...CoreUserFields\n        }\n        messages(page: $messagesPage) {\n            messages {\n                ...CoreMessageFields\n            }\n            next\n        }\n        updatedAt\n    }\n"): (typeof documents)["\n    fragment CoreChannelFields on Channel {\n        id\n        createdAt\n        members {\n            ...CoreUserFields\n        }\n        messages(page: $messagesPage) {\n            messages {\n                ...CoreMessageFields\n            }\n            next\n        }\n        updatedAt\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Channels($page: Pagination!, $messagesPage: Pagination!) {\n        channels(page: $page) {\n            channels {\n                ...CoreChannelFields\n            }\n            next\n        }\n    }\n"): (typeof documents)["\n    query Channels($page: Pagination!, $messagesPage: Pagination!) {\n        channels(page: $page) {\n            channels {\n                ...CoreChannelFields\n            }\n            next\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment CorePostFields on Post {\n        id\n        author {\n            ...CoreUserFields\n        }\n        content\n        contentType\n        createdAt\n        updatedAt\n\n        like {\n            id\n            createdAt\n        }\n    }\n"): (typeof documents)["\n    fragment CorePostFields on Post {\n        id\n        author {\n            ...CoreUserFields\n        }\n        content\n        contentType\n        createdAt\n        updatedAt\n\n        like {\n            id\n            createdAt\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Posts($id: ID, $page: Pagination!) {\n        posts(id: $id, page: $page) {\n            posts {\n                ...CorePostFields\n            }\n            next\n        }\n    }\n"): (typeof documents)["\n    query Posts($id: ID, $page: Pagination!) {\n        posts(id: $id, page: $page) {\n            posts {\n                ...CorePostFields\n            }\n            next\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Post($id: ID!) {\n        post(id: $id) {\n            ...CorePostFields\n        }\n    }\n"): (typeof documents)["\n    query Post($id: ID!) {\n        post(id: $id) {\n            ...CorePostFields\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation PostCreate($input: PostCreateInput!) {\n        postCreate(input: $input) {\n            ...CorePostFields\n        }\n    }\n"): (typeof documents)["\n    mutation PostCreate($input: PostCreateInput!) {\n        postCreate(input: $input) {\n            ...CorePostFields\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment CoreUserFields on User {\n        id\n        username\n        name\n        bio\n        email\n        profile\n        cover\n    }\n"): (typeof documents)["\n    fragment CoreUserFields on User {\n        id\n        username\n        name\n        bio\n        email\n        profile\n        cover\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetUser($id: ID) {\n        user(id: $id) {\n            ...CoreUserFields\n        }\n    }\n"): (typeof documents)["\n    query GetUser($id: ID) {\n        user(id: $id) {\n            ...CoreUserFields\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UserUpdate($input: UserUpdateInput!) {\n        userUpdate(input: $input) {\n            ...CoreUserFields\n        }\n    }\n"): (typeof documents)["\n    mutation UserUpdate($input: UserUpdateInput!) {\n        userUpdate(input: $input) {\n            ...CoreUserFields\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
<<<<<<< HEAD
export function gql(source: "\n    mutation PasswordUpdate($old: String!, $new: String!) {\n        passwordUpdate(old: $old, new: $new)\n    }\n"): (typeof documents)["\n    mutation PasswordUpdate($old: String!, $new: String!) {\n        passwordUpdate(old: $old, new: $new)\n    }\n"];
=======
export function gql(source: "\n    query SearchUsers($query: String!, $page: Pagination!) {\n        searchUsers(query: $query, page: $page) {\n            next\n            users {\n                ...CoreUserFields\n            }\n        }\n    }\n"): (typeof documents)["\n    query SearchUsers($query: String!, $page: Pagination!) {\n        searchUsers(query: $query, page: $page) {\n            next\n            users {\n                ...CoreUserFields\n            }\n        }\n    }\n"];
>>>>>>> a811e43090cb29f417befb2afcc388c988f619dd

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;