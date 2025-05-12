import { makeStyles } from '@griffel/react';
import type { FC, HTMLAttributes } from 'react';
import styles from './list-item.css.ts';

const useStyles = makeStyles(styles);

type ListItemProps = {
  name?: string;
  description?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const ListItem: FC<ListItemProps & HTMLAttributes<HTMLElement>> = ({
  name,
  description,
  icon,
  onClick,
  ...props
}) => {
  const classes = useStyles();
  const handleClick = () => onClick?.();

  return (
    <div className={classes.item} onClick={handleClick} {...props}>
      {icon && <div className={classes.icon}>{icon}</div>}
      <div className={classes.content}>
        <div className={classes.name}>{name}</div>
        {description && <div className={classes.description}>{description}</div>}
      </div>
    </div>
  );
};

export default ListItem;
