import { makeStyles } from '@griffel/react';
import Button from '@gui/components/button/button.tsx';
import { useFormStatus } from 'react-dom';
import { Form, redirect } from 'react-router';
import { commitSession, getSession } from '@/app/sessions.server.ts';
import { signin } from '@/auth/auth.ts';
import { useAuth } from '@/hooks/useAuth.ts';
import type { Route } from './+types/login.ts';
import styles from './login.css.ts';

const useStyles = makeStyles(styles);

export async function loader({ request }: Route.LoaderArgs) {
  const { isAuthenticated } = await useAuth(request);

  if (isAuthenticated) {
    return redirect('/');
  }

  return { isAuthenticated };
}

export async function action({ request }: Route.ActionArgs) {
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
}

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

/**
 * This component is used to render the login form.
 * It uses the `Form` component from `react-router` to handle the form submission.
 */
export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Form method="post" className={classes.form}>
        <header>
          <span className="brand-text-color">Login</span>
        </header>
        <div>
          <input
            id="username"
            type="text"
            name="username"
            className={classes.input}
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
            className={classes.input}
            autoComplete="current-password"
            required
            placeholder="Enter your password"
          />
        </div>
        <footer className={classes.actions}>
          <Actions />
        </footer>
      </Form>
    </div>
  );
}
