import { makeStyles } from '@griffel/react';
import type { FC, HTMLAttributes } from 'react';
import styles from './list-item.css.ts';

const useClasses = makeStyles(styles);

type ListItemProps = {
  name?: string;
  description?: string;
  icon?: React.ReactNode;
  height?: string;
  onClick?: () => void;
};

const ListItem: FC<ListItemProps & HTMLAttributes<HTMLLIElement>> = ({
  name,
  description,
  icon,
  onClick,
  height = '40px',
  ...props
}) => {
  const classes = useClasses();

  const handleClick = () => onClick?.();

  return (
    <li
      className={classes.item}
      style={{ height: height, minHeight: height }}
      onClick={handleClick}
      {...props}
    >
      {icon && <div className={classes.icon}>{icon}</div>}
      <div className={classes.content}>
        <div className={classes.name}>{name}</div>
        {description && (
          <div className={classes.description}>{description}</div>
        )}
      </div>
    </li>
  );
};

export default ListItem;
