import { makeStyles } from '@griffel/react';
import Button from '@gui/components/button/button.tsx';
import { Controller, useForm } from 'react-hook-form';
import { Form } from 'react-router';
import LocationStateDropdownList from '@/components/dropdownlist/location-state-dropdownlist.tsx';
import type { CustomerById } from '@/models/index.ts';
import styles from './customer-detail.css.ts';
import type { CustomerFormData } from './customer-form-data.ts';

const useStyles = makeStyles(styles);

const Footer = ({
  onCancel,
  onDelete,
  isDirty,
  isValid,
}: {
  onCancel: () => void;
  onDelete: () => void;
  isDirty: boolean;
  isValid: boolean;
}) => {
  return (
    <>
      <Button type="submit" disabled={!isDirty || !isValid}>
        Save
      </Button>
      <Button type="button" disabled={!isDirty} onClick={onCancel}>
        Cancel
      </Button>
      <Button type="button" disabled={isDirty} onClick={onDelete}>
        Delete
      </Button>
    </>
  );
};

type CustomerDetailProps = {
  customer: CustomerById;
  onSave?: (data: CustomerFormData) => void;
  onDelete?: () => void;
};

const CustomerDetail = ({ customer, onSave, onDelete }: CustomerDetailProps) => {
  const classes = useStyles();

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
    register,
    reset,
  } = useForm<CustomerFormData>();

  const { name, phone, city, state, streetAddress, streetAddress2, zip } = customer!;

  return (
    <Form method="post" className={classes.form} onSubmit={handleSubmit(e => onSave?.(e))}>
      <header className={classes.header}>
        <span className={classes.headerTitle}>Customer</span>
        <span className={classes.headerDescription}>Update customer information</span>
      </header>

      <div className={classes.sectionGroup}>
        <label htmlFor="customer-name">Contact</label>

        <div className={classes.inputGroup}>
          <input
            id="customer-name"
            type="text"
            defaultValue={name}
            {...register('name', { required: true })}
          />
          <input type="tel" defaultValue={phone} {...register('phone', { required: true })} />
        </div>
      </div>

      <div className={classes.sectionGroup}>
        <label htmlFor="customer-streetAddress">Address</label>

        <div className={classes.inputGroup}>
          <input
            id="customer-streetAddress"
            type="text"
            defaultValue={streetAddress}
            {...register('streetAddress', { required: true })}
          />
          <input
            id="customer-streetAddress2"
            type="text"
            defaultValue={streetAddress2}
            {...register('streetAddress2')}
          />
          <div className={classes.addressCityStateZip}>
            <input type="text" defaultValue={city} {...register('city', { required: true })} />
            <Controller
              name="stateId"
              control={control}
              rules={{ required: false }}
              render={({ field }) => (
                <LocationStateDropdownList defaultValue={state!.id} {...field} />
              )}
            />
            <input type="text" defaultValue={zip} {...register('zip', { required: true })} />
          </div>
        </div>
      </div>

      <footer className={classes.footer}>
        <Footer
          isDirty={isDirty}
          isValid={isValid}
          onCancel={() => reset(customer)}
          onDelete={() => onDelete?.()}
        />
      </footer>
    </Form>
  );
};

export default CustomerDetail;
