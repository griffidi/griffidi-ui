import { makeStyles } from '@griffel/react';
import Button from '@gui/components/button/button.tsx';
import { useFormStatus } from 'react-dom';
import { Form, redirect } from 'react-router';
import { commitSession, getSession } from '@/app/sessions.server.ts';
import { signin } from '@/auth/auth.ts';
import { useAuth } from '@/hooks/useAuth.ts';
import type { Route } from './+types/login.ts';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    placeItems: 'center',
    height: '100%',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.3rem',
    margin: '0 auto',
    width: '300px',

    '> header': {
      fontSize: '3rem',
    },
  },

  input: {
    width: '100%',
    padding: '0.3rem 0.5rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--color-gray-700)',
    backgroundColor: '#fff',
    color: 'var(--color-gray-200)',
  },

  actions: {
    '--gui-button-background-color': 'var(--gui-color-secondary)',

    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
  const { isAuthenticated } = await useAuth(request);

  if (isAuthenticated) {
    return redirect('/');
  }

  return { isAuthenticated };
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
    <div className={styles.container}>
      <Form method="post" className={styles.form}>
        <header>
          <span className="brand-text-color">Login</span>
        </header>
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
        <footer className={styles.actions}>
          <Actions />
        </footer>
      </Form>
    </div>
  );
};

export { action, loader };
export default Login;
