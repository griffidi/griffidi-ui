import { useApolloClient } from '@apollo/client/react/hooks';
import type { CommandItem } from '@gui/components/command-palette/command-item.ts';
import CommandPalette from '@gui/components/command-palette/command-palette.tsx';
import type { Item } from '@gui/components/list/item.ts';
import { useState, useTransition } from 'react';
import { GetSearchResults } from '@/types/graphql.ts';

const Search = () => {
  const client = useApolloClient();
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState<CommandItem[]>([]);

  // On search, query search and set results.
  const handleSearch = (searchTerm: string) => {
    startTransition(async () => {
      if (!searchTerm) {
        setResults([]);
        return;
      }

      const {
        data: { search = [] },
      } = await client.query({
        query: GetSearchResults,
        variables: {
          query: searchTerm,
        },
      });

      setResults(search as unknown as CommandItem[]);
    });
  };

  const handleSelectedChanged = (item: Item) => {
    const selectedItem = results.find(({ id }) => id === item.id);

    if (selectedItem) {
      console.log('Selected item:', selectedItem);
    }
  };

  return (
    <>
      <CommandPalette
        isSearching={isPending}
        results={results}
        onSearch={handleSearch}
        onClose={() => setResults([])}
        onSelectedChange={handleSelectedChanged}
      />
    </>
  );
};

export default Search;
