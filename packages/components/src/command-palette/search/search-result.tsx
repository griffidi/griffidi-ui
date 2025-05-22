import { Launch } from '@carbon/icons-react';
import { closest } from '@gui/core';
import type { FC, MouseEvent, ReactSVGElement } from 'react';
import type { Item } from '../../list/item.ts';
import ListItem from '../../list/list-item.tsx';
import VirtualList from '../../list/virtual-list.tsx';
import type { CommandItem } from '../command-item.ts';
import type { CommandPaletteResultTypeMap } from '../command-palette.tsx';

type SearchResultsProps = {
  height: number;
  results: CommandItem[];
  resultTypeIconMap: CommandPaletteResultTypeMap;
  onSelect: (item: Item) => void;
  onOpenItem: (item: Item) => void;
};

/**
 * This is the search results for the command palette. It is a list of items that
 * the user can select from.
 *
 * @param { height } height - The height of the list.
 * @param { results } results - The results to display.
 * @param { onSelect } onSelect - The function to call when the user selects an item.
 */
const SearchResults: FC<SearchResultsProps> = ({
  height,
  results,
  resultTypeIconMap,
  onSelect,
  onOpenItem,
}) => {
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

    const handleOpenItem = (e: MouseEvent<ReactSVGElement>) => {
      const item = closest(e.target as Element, '.gui-list-item');
      if (item) {
        // item.classList.add('gui-list-item-selected');
        onOpenItem({ id });
      }
    };

    return (
      <ListItem
        key={id}
        name={name}
        description={description}
        leadingIcon={icon}
        trailingIcon={<Launch onClick={handleOpenItem} />}
        style={{
          ...style,
          color: iconColorCssVar,
        }}
        onSelect={() => onSelect({ id })}
      />
    );
  };

  return (
    <VirtualList
      height={height + 2} // Add 2px to account for the border
      itemCount={results.length}
      itemSize={52}
      renderItem={renderItem}
    ></VirtualList>
  );
};

export default SearchResults;
