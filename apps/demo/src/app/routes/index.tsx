import { makeStyles } from '@griffel/react';
import { type LoaderFunctionArgs, redirect } from 'react-router';
// import { useLocalStorage } from '@/hooks/useLocalStorage.tsx';
import type { Route } from './+types';

const useStyles = makeStyles({
  homeContainer: {
    display: 'grid',
    placeItems: 'center',
    height: '100vh',

    span: {
      fontSize: '7rem',
      fontWeight: 700,
      transition: 'transform 1s ease-in-out',

      '&:hover': {
        transform: 'scale(2)',
        transition: 'transform 0.3s ease-in-out',
      },
    },
  },
});

export function clientLoader({ request }: LoaderFunctionArgs) {
  // const [token] = useLocalStorage('token', null);
  const token = window.localStorage.getItem('token');

  if (!token) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }

  return null;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function HomePage() {
  const styles = useStyles();

  return (
    <div className={styles.homeContainer}>
      <span className="brand-text-color">ghost UI</span>
    </div>
  );
}
