import { Search } from '@carbon/icons-react';
import { makeStyles } from '@griffel/react';
import { useDebounce } from '@gui/core';
import { type FC, useEffect, useRef, useState } from 'react';
import styles from './search-input.css.ts';

const useClasses = makeStyles(styles);

type SearchInputProps = {
  open: boolean;
  onChange: (value: string) => void;
};

/**
 * This is the search input for the command palette. It is a controlled input.
 *
 * @param { open } open - Whether or not the input is open.
 * @param { onChange } onChange - The function to call when the user types in the input.
 */
const SearchInput: FC<SearchInputProps> = ({ open, onChange }) => {
  const classes = useClasses();
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
      <Search />
      <input
        ref={inputRef}
        placeholder="type to search..."
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
