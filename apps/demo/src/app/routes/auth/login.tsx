import { makeStyles } from '@griffel/react';
import Button from '@gui/components/button/button.tsx';
import { useFormStatus } from 'react-dom';
import { data, Form, redirect } from 'react-router';
import { commitSession, getSession } from '@/app/sessions.server.ts';
import { signin } from '@/auth/auth.ts';
// import { createApolloClient } from '@/client/create-apollo-client.ts';
import type { Route } from './+types/login.ts';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '2rem',
    backgroundColor: 'var(--color-gray-900)',
    borderRadius: 'var(--radius-xl)',
    boxShadow: 'var(--shadow-lg)',
    maxWidth: '400px',
    margin: '0 auto',
    border: '1px solid var(--color-gray-700)',
  },

  input: {
    padding: '0.5rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--color-gray-700)',
    backgroundColor: '#fff',
    color: 'var(--color-gray-200)',
  },

  button: {
    padding: '0.5rem 1rem',
    borderRadius: 'var(--radius-sm)',
    backgroundColor: 'var(--color-blue-500)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--color-blue-600)',
    },
  },
});

/**
 * This component is used to render the form actions,
 * such as the submit button.
 */
const Actions = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      Login
    </Button>
  );
};

const loader = async ({ request }: Route.LoaderArgs) => {
  const session = await getSession(request.headers.get('Cookie'));

  if (session.has('userId')) {
    return redirect('/');
  }

  return data(
    { error: session.get('error') },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    },
  );
};

const action = async ({ request }: Route.ActionArgs) => {
  const form = await request.formData();
  const username = form.get('username')?.toString()!;
  const password = form.get('password')?.toString()!;
  const token = await signin(username, password);

  const session = await getSession(request.headers.get('Cookie'));

  if (!token) {
    session.flash('error', 'Invalid username/password');

    // Redirect back to the login page with errors.
    return redirect('/login', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    });
  }

  session.set(
    'userId',
    JSON.stringify({
      username,
      token,
    }),
  );

  // Login succeeded, send them to the home page.
  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

const Login = () => {
  const styles = useStyles();

  return (
    <Form method="post" className={styles.form}>
      <div>
        <input
          id="username"
          type="text"
          name="username"
          className={styles.input}
          autoComplete="username"
          required
          placeholder="Enter your username"
        />
      </div>
      <div>
        <input
          id="password"
          type="password"
          name="password"
          className={styles.input}
          autoComplete="current-password"
          required
          placeholder="Enter your password"
        />
      </div>
      <footer>
        <Actions />
      </footer>
    </Form>
  );
};

export { action, loader };
export default Login;
