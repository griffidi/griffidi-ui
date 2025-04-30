import type { CodegenConfig } from '@graphql-codegen/cli';

const config = {
  overwrite: true,
  debug: true,
  verbose: true,
  errorsOnly: false,
  schema: 'http://localhost:4003/graphql',
  documents: ['src/graphql/**/*.graphql'],
  emitLegacyCommonJSImports: false,
  ignoreNoDocuments: true,
  config: {
    avoidOptionals: false,
    documentVariableSuffix: '',
    // allowEnumStringTypes: true,
    numericEnums: true,
    // dedupeOperationSuffix: true,
    enumsAsConst: true,
    defaultScalarType: 'unknown',
    overwrite: true,
    declarationKind: 'interface',
    immutableTypes: true,
    dedupeOperationSuffix: true,
    maybeValue: 'T | undefined',
    // preResolveTypes: true,
    skipTypename: true,
    useIndexSignature: true,
    useTypeImports: true,
  },
  generates: {
    './src/types/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-resolvers',
        'typed-document-node',
      ],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
} satisfies CodegenConfig;

export default config;
