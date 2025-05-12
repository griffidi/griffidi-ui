import { useApolloClient } from '@apollo/client/react/hooks';
import { Customer, Identification, User } from '@carbon/icons-react';
import type { CommandItem } from '@gui/components/command-palette/command-item.ts';
import CommandPalette, {
  type CommandPaletteResultTypeMap,
} from '@gui/components/command-palette/command-palette.tsx';
import type { Item } from '@gui/components/list/item.ts';
import { useState, useTransition } from 'react';
import { GetSearchResults } from '@/types/graphql.ts';

const resultTypeMap = {
  1: {
    icon: <User />,
    iconColorCssVar: '--gui-color-primary',
  },
  2: {
    icon: <Customer />,
    iconColorCssVar: '--gui-color-secondary',
  },
  3: {
    icon: <Identification />,
    iconColorCssVar: '--gui-color-tertiary',
  },
} satisfies CommandPaletteResultTypeMap;

const Search = () => {
  const client = useApolloClient();
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState<CommandItem[]>([]);

  // On search, query search and set results.
  const handleSearch = (searchTerm: string) => {
    startTransition(async () => {
      if (!searchTerm || searchTerm.length < 3) {
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
        resultTypeMap={resultTypeMap}
        onSearch={handleSearch}
        onClose={() => setResults([])}
        onSelectedChange={handleSelectedChanged}
      />
    </>
  );
};

export default Search;
