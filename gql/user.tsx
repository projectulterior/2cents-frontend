import { gql } from '@gql/__generated__/gql';

export const CORE_USER_FIELDS = gql(`
    fragment CoreUserFields on User {
        id
        isMe
        username
        name
        bio
        email
        profile
        cover
    }
`);

export const QUERY_GET_USER = gql(`
    query GetUser($id: ID) {
        user(id: $id) {
            ...CoreUserFields
        }
    }
`);

export const MUTATION_USER_UPDATE = gql(`
    mutation UserUpdate($input: UserUpdateInput!) {
        userUpdate(input: $input) {
            ...CoreUserFields
        }
    }
`);

export const QUERY_SEARCH_USERS = gql(`
    query SearchUsers($query: String!, $page: Pagination!) {
        searchUsers(query: $query, page: $page) {
            next
            users {
                ...CoreUserFields
            }
        }
    }
`);
