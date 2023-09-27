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

export const QUERY_GET_CHANNEL = gql(`
    query Channel($id: ID!, $messagesPage: Pagination!) {
        channel(id: $id) {
            ...CoreChannelFields
        }
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

export const QUERY_GET_CHANNEL_BY_MEMBERS = gql(`
    query ChannelByMembers($members: [ID!]!, $messagesPage: Pagination!) {
        channelByMembers(members: $members) {
            ...CoreChannelFields
        }
    }
`);

export const MUTATION_CREATE_CHANNEL = gql(`
    mutation ChannelCreate($input: ChannelCreateInput!, $messagesPage: Pagination!) {
        channelCreate(input: $input) {
            ...CoreChannelFields
        }
    }
`);

export const MUTATION_CREATE_MESSAGE = gql(`
    mutation MessageCreate($input: MessageCreateInput!) {
        messageCreate(input: $input) {
            ...CoreMessageFields
        }
    }
`);
