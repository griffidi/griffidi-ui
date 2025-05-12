import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  spinner: {
    width: '24px',
    height: '24px',
    border: '4px solid var(--color-slate-200)',
    borderTop: '4px solid var(--color-slate-800)',
    borderRadius: '50%',
  },
});

type ProgressSpinnerProps = {
  size?: number;
};

/**
 * ProgressSpinner component.
 *
 * @param {number} size - The size of the spinner (default: 24)
 * @returns {JSX.Element}
 */
const ProgressSpinner: React.FC<ProgressSpinnerProps> = ({ size = 24 }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.spinner}
      style={{
        width: size,
        height: size,
        borderWidth: size / 6,
      }}
    ></div>
  );
};

export default ProgressSpinner;
