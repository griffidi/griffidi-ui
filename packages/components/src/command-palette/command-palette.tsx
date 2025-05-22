import { type FC, type ReactNode, useEffect, useState } from 'react';
import Dialog from '../dialog/dialog.tsx';
import type { Item } from '../list/item.ts';
import type { CommandItem } from './command-item.ts';
import SearchInput from './search/search-input.tsx';
import SearchResults from './search/search-result.tsx';
import SearchTrigger from './search/search-trigger.tsx';

const DEFAULT_DIALOG_HEIGHT = 26;
const NAV_ITEM_GAP = 0;
const NAV_ITEM_HEIGHT = 52;
const FOOTER_HEIGHT = 24;
const FOOTER_MARGIN_TOP = 0;

export type CommandPaletteResultTypeMap = Record<
  string | number,
  { iconColorCssVar: string; icon: ReactNode }
>;

type CommandPaletteProps = {
  isSearching?: boolean;
  results: CommandItem[];
  resultTypeMap: CommandPaletteResultTypeMap;
  visibleResults?: number;
  footer?: ReactNode;
  onClose?: () => void;
  onSearch: (value: string) => void;
  onSelect?: (item: Item) => void;
  onOpenItem?: (item: Item) => void;
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
 * @param { footer } footer - The footer to display in the dialog.
 * @param { onClose } onClose - The function to call when the user closes the dialog.
 * @param { onSearch } onSearch - The function to call when the user types in the input.
 * @param { onSelect } onSelect - The function to call when the user selects an item.
 * @param { onOpenItem } onOpenItem - The function to call when the user opens an item.
 */
const CommandPalette: FC<CommandPaletteProps> = ({
  isSearching = false,
  results,
  resultTypeMap,
  visibleResults = 7,
  footer,
  onClose,
  onSearch,
  onSelect,
  onOpenItem,
}) => {
  const [open, setOpen] = useState(false);
  const [resultsHeight, setResultsHeight] = useState(DEFAULT_DIALOG_HEIGHT);
  const footerHeight = footer ? FOOTER_HEIGHT : 0;
  const footerMarginTop = footer ? FOOTER_MARGIN_TOP : 0;
  const defaultDialogHeight = DEFAULT_DIALOG_HEIGHT + footerHeight + footerMarginTop;

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

  const handleOpenItem = (item: Item) => {
    onOpenItem?.(item);
    handleClose();
  };

  const Footer = () => {
    return footer ? (
      <footer
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: `${FOOTER_HEIGHT}px`,
          marginTop: `${FOOTER_MARGIN_TOP}px`,
        }}
      >
        {footer}
      </footer>
    ) : null;
  };

  return (
    <>
      <SearchTrigger onClick={() => setOpen(true)} />
      <Dialog
        open={open}
        width="500px"
        minHeight={`${defaultDialogHeight}px`}
        position={{ top: '100px', right: '0', bottom: '0', left: '0' }}
        onClose={handleClose}
      >
        <SearchInput isSearching={isSearching} open={open} onChange={onSearch} />
        <SearchResults
          height={resultsHeight}
          results={results}
          resultTypeIconMap={resultTypeMap}
          onSelect={e => onSelect?.(e)}
          onOpenItem={handleOpenItem}
        />
        <Footer />
      </Dialog>
    </>
  );
};

export default CommandPalette;
