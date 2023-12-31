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

        cents {
            total
            deposited
            earned
            given
        }
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

export const MUTATION_CENTS_UPDATE = gql(`
    mutation CentsUpdate($amount: Int!) {
        centsUpdate(amount: $amount) {
            total
            deposited
        }
    }
`);

export const MUTATION_USER_DELETE = gql(`
    mutation UserDelete {
        userDelete {
            id
        }
    }
`);

export const MUTATION_PASSWORD_UPDATE = gql(`
    mutation PasswordUpdate($old: String!, $new: String!) {
        passwordUpdate(old: $old, new: $new)
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
