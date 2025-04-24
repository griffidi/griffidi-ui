import { useQuery } from '@apollo/client/react/hooks';
import { GetCustomers } from '@/types/graphql';

const Customers = () => {
  const { loading, error, data } = useQuery(GetCustomers);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {data?.customers.map(customer => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
