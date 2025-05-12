import { type FC, type ReactNode, useEffect, useState } from 'react';
import Dialog from '../dialog/dialog.tsx';
import type { Item } from '../list/item.ts';
import type { CommandItem } from './command-item.ts';
import SearchInput from './search/search-input.tsx';
import SearchResults from './search/search-result.tsx';
import SearchTrigger from './search/search-trigger.tsx';

const DEFAULT_DIALOG_HEIGHT = 26;
const NAV_ITEM_GAP = 8;
const NAV_ITEM_HEIGHT = 52;

export type CommandPaletteResultTypeMap = Record<
  string | number,
  { iconColorCssVar: string; icon: ReactNode }
>;

type CommandPaletteProps = {
  isSearching?: boolean;
  results: CommandItem[];
  resultTypeMap: CommandPaletteResultTypeMap;
  visibleResults?: number;
  onSearch: (value: string) => void;
  onClose?: () => void;
  onSelectedChange?: (item: Item) => void;
};

/**
 * This is the command palette. It is a dialog that allows the user to input search terms
 * and display results in a list. The user can also select an item from the list that will
 * trigger an action.
 *
 * @param { isSearching } isSearching - Whether or not the search is in progress.
 * @param { results } results - The results to display.
 * @param { resultTypeIconMap } resultTypeIconMap - The map of result types to icons.
 * @param { visibleResults } visibleResults - The number of results to display at once.
 * @param { onSearch } onSearch - The function to call when the user types in the input.
 * @param { onClose } onClose - The function to call when the user closes the dialog.
 * @param { onSelectedChange } onSelectedChange - The function to call when the user selects an item.
 */
const CommandPalette: FC<CommandPaletteProps> = ({
  isSearching = false,
  results,
  resultTypeMap,
  visibleResults = 7,
  onSearch,
  onClose,
  onSelectedChange,
}) => {
  const [open, setOpen] = useState(false);
  const [resultsHeight, setResultsHeight] = useState(DEFAULT_DIALOG_HEIGHT);

  // Listen for the '/' key to open the command palette.
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

  // Calculate the results height.
  useEffect(() => {
    if (open) {
      const len = results?.length || 0;
      const count = len > visibleResults ? visibleResults : len;
      const height = count * NAV_ITEM_HEIGHT + NAV_ITEM_GAP;
      setResultsHeight(height);
    }
  }, [results, open, visibleResults]);

  // Lets reset everything when closing.
  const handleClose = () => {
    setOpen(false);
    setResultsHeight(DEFAULT_DIALOG_HEIGHT);
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
        <SearchInput open={open} onChange={onSearch} />
        <SearchResults
          height={resultsHeight}
          isSearching={isSearching}
          results={results}
          resultTypeIconMap={resultTypeMap}
          onSelectedChange={handleSelectedChanged}
        />
      </Dialog>
    </>
  );
};

export default CommandPalette;
