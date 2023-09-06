import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'schema.graphqls', // TODO: make into url
    documents: ['**/*.tsx'],
    generates: {
        './gql/__generated__/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            },
        },
    },
    ignoreNoDocuments: true,
};

export default config;
