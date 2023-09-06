import { gql } from '@gql/__generated__/gql';

export const CORE_USER_FIELDS = gql(`
    fragment CoreUserFields on User {
        id
        name
        bio
        profile
    }
`);

export const QUERY_GET_USER = gql(`
    query GetUser($userId: ID) {
        user(id: $userId) {
            ...CoreUserFields
        }
    }
`);
