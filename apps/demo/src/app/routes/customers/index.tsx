import { useQuery } from '@apollo/client/react/hooks';
import { makeStyles } from '@griffel/react';
import Card from '@gui/components/card/card.tsx';
import CardHeader from '@gui/components/card/card-header.tsx';
import { type LoaderFunctionArgs, redirect } from 'react-router';
import { useAuth } from '@/hooks/useAuth.ts';
import { GetCustomers } from '@/types/graphql';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
  },
});

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { isAuthenticated } = await useAuth(request);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={classes.container}>
      {data?.customers.map(({ id, name }) => (
        <Card key={id}>
          <CardHeader>
            <span>{name}</span>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default Customers;
