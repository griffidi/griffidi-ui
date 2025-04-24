import { useQuery } from '@apollo/client/react/hooks';
import { SignIn } from '@/types/graphql';

export const signIn = (username: string, password: string) => {
  const { data } = useQuery(SignIn, {
    variables: {
      username,
      password,
    },
    fetchPolicy: 'no-cache',
  });

  console.log('signIn', data);
  return true;
};

export const signOut = () => {
  // Perform sign-out logic here
  console.log('signOut');
  return true;
};

export const validate = () => {
  // Check if the user is authenticated
  const token = localStorage.getItem('token');
  return !!token;
};
