import { gql } from '@gql/__generated__/gql';

export const CORE_USER_FIELDS = gql(`
    fragment CorePostFields on Post {
        id
        author {
            ...CoreUserFields
        }
        content
        contentType
        createdAt
        updatedAt
    }
`);
