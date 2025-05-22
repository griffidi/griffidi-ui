import { makeStyles } from '@griffel/react';
import ProgressSpinner from '@gui/components/progress-spinner/progress-spinner.tsx';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    placeItems: 'center',
    height: '100%',
    width: '100%',
  },
});

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ProgressSpinner />
    </div>
  );
};

export default Loading;
