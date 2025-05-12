import type { FC } from 'react';
import type { Item } from '../../list/item.ts';
import ListItem from '../../list/list-item.tsx';
import VirtualList from '../../list/virtual-list.tsx';
import ProgressSpinner from '../../progress-spinner/progress-spinner.tsx';
import type { CommandItem } from '../command-item.ts';
import type { CommandPaletteResultTypeMap } from '../command-palette.tsx';

type SearchResultsProps = {
  height: number;
  isSearching: boolean;
  visibleResults?: number;
  results: CommandItem[];
  resultTypeIconMap: CommandPaletteResultTypeMap;
  onSelectedChange: (item: Item) => void;
};

/**
 * This is the search results for the command palette. It is a list of items that
 * the user can select from.
 *
 * @param { height } height - The height of the list.
 * @param { isSearching } isSearching - Whether or not the search is in progress.
 * @param { visibleResults } visibleResults - The number of results to display at once.
 * @param { results } results - The results to display.
 * @param { onSelectedChange } onSelectedChange - The function to call when the user selects an item.
 */
const SearchResults: FC<SearchResultsProps> = ({
  height,
  isSearching,
  visibleResults,
  results,
  resultTypeIconMap,
  onSelectedChange,
}) => {
  if (isSearching) {
    return <ProgressSpinner />;
  }

  if (!results || results.length === 0) {
    return null;
  }

  const renderItem = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const item = results[index];
    const { id, name, description, type } = item;
    const { icon, iconColorCssVar } = resultTypeIconMap[type] ?? {
      icon: null,
      iconColorCssVar: '',
    };

    return (
      <ListItem
        key={id}
        name={name}
        description={description}
        icon={icon}
        style={{
          ...style,
          color: iconColorCssVar,
        }}
        onClick={() => onSelectedChange({ id })}
      />
    );
  };

  return (
    <VirtualList
      height={height}
      itemCount={results.length}
      itemSize={visibleResults}
      renderItem={renderItem}
    ></VirtualList>
  );
};

export default SearchResults;
