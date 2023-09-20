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
    "\n    fragment CorePostFields on Post {\n        id\n        author {\n            ...CoreUserFields\n        }\n        content\n        contentType\n        createdAt\n        updatedAt\n\n        like {\n            id\n            createdAt\n        }\n    }\n": types.CorePostFieldsFragmentDoc,
    "\n    query Posts($page: Pagination!) {\n        posts(page: $page) {\n            posts {\n                ...CorePostFields\n            }\n            next\n        }\n    }\n": types.PostsDocument,
    "\n    query Post($id: ID!) {\n        post(id: $id) {\n            ...CorePostFields\n        }\n    }\n": types.PostDocument,
    "\n    mutation PostCreate($input: PostCreateInput!) {\n        postCreate(input: $input) {\n            ...CorePostFields\n        }\n    }\n": types.PostCreateDocument,
    "\n    fragment CoreUserFields on User {\n        id\n        username\n        name\n        bio\n        profile\n        cover\n    }\n": types.CoreUserFieldsFragmentDoc,
    "\n    query GetUser($userId: ID) {\n        user(id: $userId) {\n            ...CoreUserFields\n        }\n    }\n": types.GetUserDocument,
    "\n    mutation UserUpdate($input: UserUpdateInput!) {\n        userUpdate(input: $input) {\n            ...CoreUserFields\n        }\n    }\n": types.UserUpdateDocument,
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
export function gql(source: "\n    fragment CorePostFields on Post {\n        id\n        author {\n            ...CoreUserFields\n        }\n        content\n        contentType\n        createdAt\n        updatedAt\n\n        like {\n            id\n            createdAt\n        }\n    }\n"): (typeof documents)["\n    fragment CorePostFields on Post {\n        id\n        author {\n            ...CoreUserFields\n        }\n        content\n        contentType\n        createdAt\n        updatedAt\n\n        like {\n            id\n            createdAt\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Posts($page: Pagination!) {\n        posts(page: $page) {\n            posts {\n                ...CorePostFields\n            }\n            next\n        }\n    }\n"): (typeof documents)["\n    query Posts($page: Pagination!) {\n        posts(page: $page) {\n            posts {\n                ...CorePostFields\n            }\n            next\n        }\n    }\n"];
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
export function gql(source: "\n    fragment CoreUserFields on User {\n        id\n        username\n        name\n        bio\n        profile\n        cover\n    }\n"): (typeof documents)["\n    fragment CoreUserFields on User {\n        id\n        username\n        name\n        bio\n        profile\n        cover\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetUser($userId: ID) {\n        user(id: $userId) {\n            ...CoreUserFields\n        }\n    }\n"): (typeof documents)["\n    query GetUser($userId: ID) {\n        user(id: $userId) {\n            ...CoreUserFields\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UserUpdate($input: UserUpdateInput!) {\n        userUpdate(input: $input) {\n            ...CoreUserFields\n        }\n    }\n"): (typeof documents)["\n    mutation UserUpdate($input: UserUpdateInput!) {\n        userUpdate(input: $input) {\n            ...CoreUserFields\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;