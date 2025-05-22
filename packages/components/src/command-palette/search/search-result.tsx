import { Launch } from '@carbon/icons-react';
import { makeStyles } from '@griffel/react';
import type { FC } from 'react';
import type { Item } from '../../list/item.ts';
import ListItem from '../../list/list-item.tsx';
import VirtualList from '../../list/virtual-list.tsx';
import type { CommandItem } from '../command-item.ts';
import type { CommandPaletteResultTypeMap } from '../command-palette.tsx';
import styles from './search-result.css.ts';

const useStyles = makeStyles(styles);

type SearchResultsProps = {
  height: number;
  results: CommandItem[];
  resultTypeIconMap: CommandPaletteResultTypeMap;
  onSelectedChange: (item: Item) => void;
};

/**
 * This is the search results for the command palette. It is a list of items that
 * the user can select from.
 *
 * @param { height } height - The height of the list.
 * @param { results } results - The results to display.
 * @param { onSelectedChange } onSelectedChange - The function to call when the user selects an item.
 */
const SearchResults: FC<SearchResultsProps> = ({
  height,
  results,
  resultTypeIconMap,
  onSelectedChange,
}) => {
  const classes = useStyles();

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
        className={classes.item}
        key={id}
        name={name}
        description={description}
        leadingIcon={icon}
        trailingIcon={<Launch />}
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
      height={height + 2} // Add 2px to account for the border
      itemCount={results.length}
      itemSize={52}
      renderItem={renderItem}
    ></VirtualList>
  );
};

export default SearchResults;
