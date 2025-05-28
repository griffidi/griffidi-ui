import { makeStyles } from '@griffel/react';
import ProgressSpinner from '@gui/components/progress-spinner/progress-spinner.tsx';
import type { FC, HTMLAttributes } from 'react';
import styles from './loading.css.ts';

const useStyles = makeStyles(styles);

const Loading: FC<HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.container} {...props}>
      <ProgressSpinner />
    </div>
  );
};

export default Loading;
