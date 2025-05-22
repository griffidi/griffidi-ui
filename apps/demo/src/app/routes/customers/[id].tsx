import { useSuspenseQuery } from '@apollo/client/react/hooks';
import { makeStyles } from '@griffel/react';
import Button from '@gui/components/button/button.tsx';
import { Form, redirect, useParams } from 'react-router';
import type { Route } from '@/+types/index.ts';
import { useAuth } from '@/hooks/useAuth.ts';
import { GetCustomerById } from '@/types/graphql.ts';
import styles from './[id].css.ts';

const useStyles = makeStyles(styles);

export async function loader({ request }: Route.LoaderArgs) {
  const { isAuthenticated } = await useAuth(request);

  if (!isAuthenticated) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }

  return { isAuthenticated };
}

export function action() {}

export default function Customer() {
  const classes = useStyles();
  const { id = '' } = useParams<{ id: string }>();

  const {
    data: { customer },
  } = useSuspenseQuery(GetCustomerById, {
    variables: {
      id,
    },
  });

  const { name, phone, dateCreated, dateUpdated, city, state, streetAddress, zip } = customer ?? {};

  return (
    <Form method="post" className={classes.form}>
      <header className={classes.header}>
        <span className={classes.headerTitle}>Customer</span>
        <span className={classes.headerDescription}>Update customer information</span>
      </header>

      <div className={classes.sectionGroup}>
        <label htmlFor="customer-name">Contact</label>

        <div className={classes.inputGroup}>
          <input id="customer-name" type="text" name="contact" defaultValue={name} />
          <input id="customer-phone" type="tel" name="contact" defaultValue={phone} />
        </div>
      </div>

      <div className={classes.sectionGroup}>
        <label htmlFor="customer-streetAddress">Address</label>

        <div className={classes.inputGroup}>
          <input
            id="customer-streetAddress"
            type="text"
            name="streetAddress"
            defaultValue={streetAddress}
          />
          <div className={classes.addressCityStateZip}>
            <input id="customer-city" type="text" name="city" defaultValue={city} />
            <input id="customer-state" type="text" name="state" defaultValue={state} />
            <input id="customer-zip" type="text" name="zip" defaultValue={zip} />
          </div>
        </div>
      </div>

      <footer className={classes.footer}>
        <Button type="submit">Save</Button>
        <Button type="button" variant="secondary">
          Cancel
        </Button>
        <Button type="button" variant="secondary">
          Delete
        </Button>
      </footer>
    </Form>
  );
}
