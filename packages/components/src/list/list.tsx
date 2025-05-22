import { makeStyles } from '@griffel/react';
import { closest } from '@gui/core';
import { type FC, type HTMLAttributes } from 'react';
import type { Item } from './item.ts';
import styles from './list.css.ts';

const useStyles = makeStyles(styles);

type ListProps = {
  children: React.ReactNode[];
  onSelect?: (item: Item) => void;
  className?: string;
};

const List: FC<ListProps & HTMLAttributes<HTMLUListElement>> = ({
  children,
  onSelect,
  className,
  ...props
}) => {
  const classes = useStyles();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const item = closest(e.target as Element, '.gui-list-item');

    if (item) {
      item.classList.add('gui-list-item-selected');
      onSelect?.({ id: item.id });
    }
  };

  return (
    <ul className={`${classes.list} ${className}`} onClick={handleClick} {...props}>
      {children}
    </ul>
  );
};

export default List;
