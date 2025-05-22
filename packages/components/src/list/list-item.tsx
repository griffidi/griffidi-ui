import { makeStyles } from '@griffel/react';
import type { FC, HTMLAttributes } from 'react';
import styles from './list-item.css.ts';

const useStyles = makeStyles(styles);

type ListItemProps = {
  name?: string;
  description?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClick?: () => void;
};

const ListItem: FC<ListItemProps & HTMLAttributes<HTMLElement>> = ({
  className,
  name,
  description,
  leadingIcon,
  trailingIcon,
  onClick,
  ...props
}) => {
  const classes = useStyles();
  const handleClick = () => onClick?.();

  return (
    <div className={`${classes.item} ${className}`} onClick={handleClick} {...props}>
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
