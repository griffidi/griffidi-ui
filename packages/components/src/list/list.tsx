import { makeStyles } from '@griffel/react';
import { type FC, type HTMLAttributes } from 'react';
import type { Item } from './item.ts';
import styles from './list.css.ts';

const useClasses = makeStyles(styles);

type ListProps = {
  children: React.ReactNode[];
  onSelectedChange?: (item: Item) => void;
  className?: string;
};

const List: FC<ListProps & HTMLAttributes<HTMLUListElement>> = ({
  children,
  onSelectedChange,
  className,
  ...props
}) => {
  const classes = useClasses();

  const handleClick = (e: React.MouseEvent) => {
    const item = (
      (e.target as HTMLElement).nodeName === 'LI'
        ? e.target
        : (e.target as HTMLElement).closest('li')
    ) as HTMLLIElement;

    if (item && onSelectedChange) {
      const id = item.id;

      if (id) {
        onSelectedChange?.({ id, item });
      }
    }
  };

  return (
    <ul
      className={`${classes.list} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </ul>
  );
};

export default List;
