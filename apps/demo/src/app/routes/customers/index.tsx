import { useQuery } from '@apollo/client/react/hooks';
import { makeStyles } from '@griffel/react';
import Card from '@gui/components/card/index.tsx';
import ProgressSpinner from '@gui/components/progress-spinner/progress-spinner.tsx';
import { type LoaderFunctionArgs, redirect } from 'react-router';
import ErrorMessage from '@/components/error/error-message.tsx';
import { useAuth } from '@/hooks/useAuth.ts';
import { GetCustomers } from '@/types/graphql';

const useStyles = makeStyles({
  container: {
    '--gui-card-header-background-color': 'var(--gui-color-secondary)',
    '--gui-card-header-color': 'var(--gui-color-text)',
    '--gui-card-content-background-color': 'var(--color-slate-800)',
    '--gui-card-content-color': 'var(--gui-color-text)',

    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '16px',
  },

  title: {
    color: 'var(--gui-color-text)',
    fontSize: '1.2rem',
    fontWeight: '400',
  },

  content: {
    color: 'var(--gui-color-text)',
    fontSize: '0.9rem',
  },
});

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { isAuthenticated } = await useAuth(request);

  console.log(`customers loader: ${isAuthenticated}`);
  if (!isAuthenticated) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }

  return { isAuthenticated };
};

const Customers = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GetCustomers);

  if (loading) return <ProgressSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className={classes.container}>
      {data?.customers.map(({ id, name, city, state }) => (
        <Card.Root key={id}>
          <Card.Header>
            <span className={classes.title}>{name}</span>
          </Card.Header>
          <Card.Content>
            <span className={classes.content}>
              {city}, {state}
            </span>
          </Card.Content>
        </Card.Root>
      ))}
    </div>
  );
};

export default Customers;
