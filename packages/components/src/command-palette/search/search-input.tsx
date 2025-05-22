import { Search as SearchIcon } from '@carbon/icons-react';
import { makeStyles } from '@griffel/react';
import { useDebounce } from '@gui/core';
import { type FC, useEffect, useRef, useState } from 'react';
import ProgressSpinner from '../../progress-spinner/progress-spinner.tsx';
import styles from './search-input.css.ts';

const useStyles = makeStyles(styles);

type SearchInputProps = {
  isSearching: boolean;
  open: boolean;
  onChange: (value: string) => void;
};

/**
 * This is the search input for the command palette. It is a controlled input.
 *
 * @param { isSearching } isSearching - Whether or not the search is in progress.
 * @param { open } open - Whether or not the input is open.
 * @param { onChange } onChange - The function to call when the user types in the input.
 */
const SearchInput: FC<SearchInputProps> = ({ isSearching, open, onChange }) => {
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 400);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }

    // Reset the value when the dialog is closed.
    return () => {
      setValue('');
    };
  }, [open]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: adding event handler `onChange` to the dependency array causes infinite loop
  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className={classes.searchInput}>
      <SearchIcon size={21} />
      <input
        ref={inputRef}
        placeholder="type to search..."
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {isSearching && <ProgressSpinner size={16} />}
      <span>esc</span>
    </div>
  );
};

export default SearchInput;
