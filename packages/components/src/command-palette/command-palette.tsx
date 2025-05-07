import { Search } from '@carbon/icons-react';
import { makeStyles } from '@griffel/react';
import { useDebounce } from '@gui/core';
import { type FC, useEffect, useState } from 'react';
import Dialog from '../dialog/dialog.tsx';
import type { Item } from '../list/item.ts';
import List from '../list/list.tsx';
import ListItem from '../list/list-item.tsx';
import ProgressSpinner from '../progress-spinner/progress-spinner.tsx';
import type { CommandItem } from './command-item.ts';
import styles from './command-palette.css.ts';

const DEFAULT_DIALOG_HEIGHT = 26;
const NAV_ITEM_GAP = 8;
const NAV_ITEM_HEIGHT = 52;
const MAX_VISIBLE_ITEMS = 5;

const useClasses = makeStyles(styles);

const SearchTrigger: FC<{ onClick: () => void }> = ({ onClick }) => {
  const classes = useClasses();

  return (
    <div className={classes.searchTrigger} onClick={onClick}>
      <Search />
      <span>
        type <span>/</span> to search
      </span>
    </div>
  );
};

const SearchInput: FC<{ value: string; onChange: (e: string) => void }> = ({
  value,
  onChange,
}) => {
  const classes = useClasses();

  return (
    <div className={classes.searchInput}>
      <Search />
      <input
        // biome-ignore lint/a11y/noAutofocus: we want to focus the input when the dialog opens
        autoFocus
        placeholder="type to search..."
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

const SearchResults: FC<{
  height: string;
  isSearching: boolean;
  results: CommandItem[];
  onSelectedChange: (item: Item) => void;
}> = ({ height, isSearching, results, onSelectedChange }) => {
  const classes = useClasses();

  if (isSearching) {
    return <ProgressSpinner />;
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <List
      className={classes.searchResults}
      style={{ height }}
      onSelectedChange={onSelectedChange}
    >
      {results?.map(result => (
        <ListItem key={result.id} height={`${NAV_ITEM_HEIGHT}px`} {...result} />
      ))}
    </List>
  );
};

type CommandPaletteProps = {
  isSearching?: boolean;
  results: CommandItem[];
  searchDelay?: number;
  onSearch?: (searchTerm: string) => void;
  onClose?: () => void;
  onSelectedChange?: (item: Item) => void;
};

const CommandPalette: FC<CommandPaletteProps> = ({
  isSearching = false,
  results,
  searchDelay = 500,
  onSearch,
  onClose,
  onSelectedChange,
}) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, searchDelay);
  const [resultsHeight, setResultsHeight] = useState(
    `${DEFAULT_DIALOG_HEIGHT}px`,
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === '/') {
        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: adding event handler `onSearch` to the dependency array causes infinite loop
  useEffect(() => {
    if (onSearch) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (open) {
      const count =
        results.length > MAX_VISIBLE_ITEMS ? MAX_VISIBLE_ITEMS : results.length;
      const height = count * NAV_ITEM_HEIGHT + NAV_ITEM_GAP;
      setResultsHeight(`${height}px`);
    }
  }, [results, open]);

  const handleClose = () => {
    setSearchTerm('');
    setOpen(false);
    setResultsHeight(`${DEFAULT_DIALOG_HEIGHT}px`);
    onClose?.();
  };

  const handleSelectedChanged = (item: Item) => {
    onSelectedChange?.(item);
    handleClose();
  };

  return (
    <>
      <SearchTrigger onClick={() => setOpen(true)} />
      <Dialog
        open={open}
        width="500px"
        minHeight={`${DEFAULT_DIALOG_HEIGHT}px`}
        position={{ top: '100px', right: '0', bottom: '0', left: '0' }}
        onClose={handleClose}
      >
        <SearchInput value={searchTerm} onChange={setSearchTerm} />
        <SearchResults
          height={resultsHeight}
          isSearching={isSearching}
          results={results}
          onSelectedChange={handleSelectedChanged}
        />
      </Dialog>
    </>
  );
};

export default CommandPalette;
