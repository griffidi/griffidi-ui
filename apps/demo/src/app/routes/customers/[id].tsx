import { useMutation, useSuspenseQuery } from '@apollo/client/react/hooks';
import { makeStyles } from '@griffel/react';
import ConfirmDialog from '@gui/components/dialog/confirm-dialog.tsx';
import { useEffect, useState, useTransition } from 'react';
import { set } from 'react-hook-form';
import { redirect, useParams } from 'react-router';
import type { Route } from '@/+types/index.ts';
import CustomerDetail from '@/components/customer-detail/customer-detail.tsx';
import type { CustomerFormData } from '@/components/customer-detail/customer-form-data.ts';
import loadingStyles from '@/components/loading/loading.css.ts';
import Loading from '@/components/loading/loading.tsx';
import { useAuth } from '@/hooks/useAuth.ts';
import {
  type CustomerUpdateInput,
  DeleteCustomer,
  GetCustomerById,
  UpdateCustomer,
} from '@/types/graphql.ts';
import styles from './[id].css.ts';

const useStyles = makeStyles(styles);
const useLoadingStyles = makeStyles(loadingStyles);

export async function loader({ request }: Route.LoaderArgs) {
  const { isAuthenticated } = await useAuth(request);

  if (!isAuthenticated) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }

  return { isAuthenticated };
}

export default function Customer() {
  const classes = useStyles();
  const loadingClasses = useLoadingStyles();
  const { id = '' } = useParams<{ id: string }>();
  const [updatedCustomer, setUpdatedCustomer] = useState<CustomerUpdateInput | null>(null);
  const [isPending, startTransition] = useTransition();
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const {
    data: { customer },
  } = useSuspenseQuery(GetCustomerById, {
    variables: {
      id,
    },
  });

  const [saveCustomer] = useMutation(UpdateCustomer, {
    variables: {
      id,
      data: updatedCustomer!,
    },
    onCompleted: data => {
      if (data?.updateOneCustomer) {
        console.log('Customer updated successfully:', data.updateOneCustomer);
      }
    },
    onError: error => {
      console.error('Error updating customer:', error);
    },
  });

  const [deleteCustomer] = useMutation(DeleteCustomer, {
    variables: {
      id,
    },
  });

  const handleDelete = async () => {
    console.log('Deleting customer with ID:', id);
    // await deleteCustomer();
  };

  const handleSave = (data: CustomerFormData) => setUpdatedCustomer(data);

  // biome-ignore lint/correctness/useExhaustiveDependencies: adding saveCustomer to dependencies causes an infinite loop.
  useEffect(() => {
    if (updatedCustomer) {
      startTransition(async () => {
        await saveCustomer();
      });
    }
  }, [updatedCustomer]);

  return (
    <div className={classes.container}>
      {isPending && <Loading className={loadingClasses.fill} />}
      <CustomerDetail
        customer={customer!}
        onSave={handleSave}
        onDelete={() => setConfirmDialogOpen(true)}
      />
      <ConfirmDialog
        title="Delete Customer"
        message="Are you sure you want to delete this customer?"
        open={confirmDialogOpen} // Replace with actual state to control dialog visibility
        confirmButtonText="Delete"
        onConfirm={handleDelete}
      />
    </div>
  );
}
