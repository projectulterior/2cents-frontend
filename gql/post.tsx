import { gql } from '@gql/__generated__/gql';

export const CORE_POST_FIELDS = gql(`
    fragment CorePostFields on Post {
        id
        author {
            ...CoreUserFields
        }
        content
        contentType
        createdAt
        updatedAt

        like {
            id
            createdAt
        }
    }
`);

export const QUERY_GET_POSTS = gql(`
    query Posts($page: Pagination!) {
        posts(page: $page) {
            posts {
                ...CorePostFields
            }
            next
        }
    }
`);

export const QUERY_GET_POST = gql(`
    query Post($id: ID!) {
        post(id: $id) {
            ...CorePostFields
        }
    }
`);

export const MUTATION_CREATE_POST = gql(`
    mutation PostCreate($input: PostCreateInput!) {
        postCreate(input: $input) {
            ...CorePostFields
        }
    }
`);
