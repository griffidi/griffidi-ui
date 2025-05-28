import { useQuery } from '@apollo/client/react/hooks';
import { Launch } from '@carbon/icons-react';
import { makeStyles } from '@griffel/react';
import Table from '@gui/components/table/index.tsx';
import { Link, type LoaderFunctionArgs, redirect } from 'react-router';
import ErrorMessage from '@/components/error/error-message.tsx';
import Loading from '@/components/loading/loading.tsx';
import { useAuth } from '@/hooks/useAuth.ts';
import { type Customer, GetCustomers } from '@/types/graphql';
import styles from './index.css.ts';

const useStyles = makeStyles(styles);

export async function loader({ request }: LoaderFunctionArgs) {
  const { isAuthenticated } = await useAuth(request);

  if (!isAuthenticated) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }

  return { isAuthenticated };
}

export default function Customers() {
  const classes = useStyles();
  const {
    loading,
    error,
    data: { customers = [] } = { customers: [] as Customer[] },
  } = useQuery(GetCustomers);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <Table.Root className={classes.table}>
      <Table.HeaderRow>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>State</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.HeaderRow>
      {customers.map(({ id, name, city, state }) => (
        <Table.Row key={id}>
          <Table.Cell>{id}</Table.Cell>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{city}</Table.Cell>
          <Table.Cell>{state.name}</Table.Cell>
          <Table.Cell>
            <Link to={`/customers/${id}`} target="_blank" className={classes.link}>
              <Launch />
            </Link>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Root>
  );
}
