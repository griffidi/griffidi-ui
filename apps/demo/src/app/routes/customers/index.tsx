import { useQuery } from '@apollo/client/react/hooks';
import { makeStyles } from '@griffel/react';
import ProgressSpinner from '@gui/components/progress-spinner/progress-spinner.tsx';
import Table from '@gui/components/table/index.tsx';
import { type LoaderFunctionArgs, redirect } from 'react-router';
import ErrorMessage from '@/components/error/error-message.tsx';
import { useAuth } from '@/hooks/useAuth.ts';
import { type Customer, GetCustomers } from '@/types/graphql';

const useStyles = makeStyles({
  table: {
    margin: '0 auto',
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
  const {
    loading,
    error,
    data: { customers = [] } = { customers: [] as Customer[] },
  } = useQuery(GetCustomers);

  if (loading) return <ProgressSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <Table.Root className={classes.table}>
      <Table.HeaderRow>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>State</Table.HeaderCell>
      </Table.HeaderRow>
      <div>
        {customers.map(({ id, name, city, state }) => (
          <Table.Row key={id}>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{city}</Table.Cell>
            <Table.Cell>{state}</Table.Cell>
          </Table.Row>
        ))}
      </div>
    </Table.Root>
  );
};

export default Customers;
