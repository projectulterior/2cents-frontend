import { gql } from '@gql/__generated__/gql';

export const CORE_USER_FIELDS = gql(`
    fragment CoreUserFields on User {
        id
        username
        name
        bio
        profile
        cover
        createdAt
    }
`);

export const QUERY_GET_USER = gql(`
    query GetUser($userId: ID) {
        user(id: $userId) {
            ...CoreUserFields
        }
    }
`);
