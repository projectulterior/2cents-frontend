import { gql } from '@gql/__generated__/gql';

export const CORE_MESSAGE_FIELDS = gql(`
    fragment CoreMessageFields on Message {
        id
        sender {
            ...CoreUserFields
        }
        contentType
        content
        createdAt
    }
`);

export const CORE_CHANNEL_FIELDS = gql(`
    fragment CoreChannelFields on Channel {
        id
        createdAt
        members {
            ...CoreUserFields
        }
        messages(page: $messagesPage) {
            messages {
                ...CoreMessageFields
            }
            next
        }
        updatedAt
    }
`);

export const QUERY_GET_CHANNELS = gql(`
    query Channels($page: Pagination!, $messagesPage: Pagination!) {
        channels(page: $page) {
            channels {
                ...CoreChannelFields
            }
            next
        }
    }
`);
