import { useApolloClient } from '@apollo/client/react/hooks';
import { Customer, Identification, User } from '@carbon/icons-react';
import { makeStyles } from '@griffel/react';
import type { CommandItem } from '@gui/components/command-palette/command-item.ts';
import CommandPalette, {
  type CommandPaletteResultTypeMap,
} from '@gui/components/command-palette/command-palette.tsx';
import type { Item } from '@gui/components/list/item.ts';
import { useState, useTransition } from 'react';
import { useNavigate } from 'react-router';
import GuiIcon from '@/components/icons/gui.tsx';
import { GetSearchResults } from '@/types/graphql.ts';
import styles from './search.css.ts';

const useStyles = makeStyles(styles);

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
  const classes = useStyles();
  const client = useApolloClient();
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState<CommandItem[]>([]);
  const navigate = useNavigate();

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

  const handleOpenItem = (item: Item) => {
    const selectedItem = results.find(({ id }) => id === item.id);

    if (selectedItem) {
      const { type, id } = selectedItem;

      if (type === 1) {
        navigate(`/users/${id}`);
      } else if (type === 2) {
        navigate(`/customers/${id}`);
      } else if (type === 3) {
        navigate(`/identifications/${id}`);
      }
    }
  };

  const Footer = () => {
    return (
      <div className={classes.footer}>
        <span className={classes.searchBy}>search by</span>
        <GuiIcon size={18} className={classes.icon} />
      </div>
    );
  };

  return (
    <>
      <CommandPalette
        isSearching={isPending}
        results={results}
        resultTypeMap={resultTypeMap}
        onSearch={handleSearch}
        onClose={() => setResults([])}
        footer={<Footer />}
        onOpenItem={handleOpenItem}
      />
    </>
  );
};

export default Search;
