import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
  error: {
    color: 'var(--color-red-500)',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px 0',
  },
});

type ErrorMessageProps = {
  message: string;
};

/**
 * ErrorMessage component.
 *
 * @param {string} message - The error message to display
 * @returns {JSX.Element}
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const classes = useClasses();

  return <div className={classes.error}>{message}</div>;
};

export default ErrorMessage;
