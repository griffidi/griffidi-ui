import { makeStyles } from '@griffel/react';
import { closest } from '@gui/core';
import type { FC, HTMLAttributes, MouseEvent } from 'react';
import type { Item } from './item.ts';
import styles from './list-item.css.ts';

const useStyles = makeStyles(styles);

type ListItemProps = {
  name?: string;
  description?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onSelect?: (item: Item) => void;
};

const ListItem: FC<ListItemProps & HTMLAttributes<HTMLElement>> = ({
  className,
  name,
  description,
  leadingIcon,
  trailingIcon,
  onSelect,
  ...props
}) => {
  const classes = useStyles();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const item = closest(e.target as Element, '.gui-list-item');
    console.log('item', item?.id);
    if (item) {
      item.classList.add('gui-list-item-selected');
      onSelect?.({ id: item.id });
    }
  };

  return (
    <div className={`${classes.item} ${className} gui-list-item`} onClick={handleClick} {...props}>
      {leadingIcon && <div className={classes.leadingIcon}>{leadingIcon}</div>}
      <div className={classes.content}>
        <div className={classes.name}>{name}</div>
        {description && <div className={classes.description}>{description}</div>}
      </div>
      {trailingIcon && (
        <div className={`${classes.trailingIcon} trailing-icon`}>{trailingIcon}</div>
      )}
    </div>
  );
};

export default ListItem;
