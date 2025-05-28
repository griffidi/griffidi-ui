import type { CodegenConfig } from '@graphql-codegen/cli';

const config = {
  overwrite: true,
  debug: true,
  verbose: true,
  errorsOnly: false,
  schema: '../api/prisma/schema.graphql',
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
    declarationKind: 'type',
    immutableTypes: true,
    dedupeOperationSuffix: true,
    maybeValue: 'T | undefined',
    inputMaybeValue: 'T | undefined',
    // preResolveTypes: true,
    skipTypename: true,
    useIndexSignature: true,
    useTypeImports: true,
    // useImplementingTypes: true,
    // flattenGeneratedTypes: true,
    // preResolveTypes: true,
    // namingConvention: 'change-case-all#constantCase',
    // wrapFieldDefinitions: true,
    // fieldWrapperValue: 'T | Promise<T>',
  },
  generates: {
    './src/types/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typed-document-node',
        // 'typescript-type-graphql',
        // 'typescript-react-apollo',
      ],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
} satisfies CodegenConfig;

export default config;
