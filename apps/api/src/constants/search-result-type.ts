export const SearchResultType = {
  customer: 1,
} as const;

export type SearchResultType =
  (typeof SearchResultType)[keyof typeof SearchResultType];
