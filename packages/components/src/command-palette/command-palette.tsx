import { Search } from '@carbon/icons-react';
import { makeStyles } from '@griffel/react';
import { useEffect, useState } from 'react';
import Dialog from '../dialog/dialog.tsx';
import styles from './command-palette.css.ts';

const useStyles = makeStyles(styles);

const CommandPalette: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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

  const SearchTrigger = () => {
    return (
      <div className={classes.searchTrigger} onClick={() => setOpen(true)}>
        <Search />
        <span>
          type <span>/</span> to search
        </span>
      </div>
    );
  };

  return (
    <>
      <SearchTrigger />
      <Dialog open={open} width="500px" height="150px">
        <div className={classes.search}>
          <Search />
          <input placeholder="type to search..." type="text" />
        </div>
      </Dialog>
    </>
  );
};

export default CommandPalette;
