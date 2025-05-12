import { Search } from '@carbon/icons-react';
import { makeStyles } from '@griffel/react';
import type { FC } from 'react';
import styles from './search-trigger.css.ts';

const useClasses = makeStyles(styles);

type SearchTriggerProps = {
  onClick: () => void;
};

/**
 * This is the visual trigger for the command palette. Looks like a search input, but
 * it's not an input. Only there to get the user to click on it if they
 * don't want to use the keyboard shortcut.
 *
 * @param { onClick } onClick - The function to call when the user clicks on the trigger.
 */
const SearchTrigger: FC<SearchTriggerProps> = ({ onClick }) => {
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

export default SearchTrigger;
