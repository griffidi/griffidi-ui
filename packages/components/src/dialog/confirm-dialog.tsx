import { makeStyles } from '@griffel/react';
import { useEffect, useState } from 'react';
import Button from '@/button/button.tsx';
import styles from './confirm-dialog.css.ts';
import Dialog from './dialog.tsx';

const useStyles = makeStyles(styles);

type ConfirmDialogProps = {
  title: string;
  message: string;
  open: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

/**
 * ConfirmDialog component for displaying a confirmation dialog.
 *
 * @param {ConfirmDialogProps} props - Options for the confirmation dialog.
 */
export default function ConfirmDialog({
  title,
  message,
  open,
  confirmButtonText = 'OK',
  cancelButtonText = 'Cancel',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const classes = useStyles();
  const [internalOpen, setInternalOpen] = useState(false);

  useEffect(() => {
    setInternalOpen(open);
  }, [open]);

  const handleCancel = () => {
    open = false;
    setInternalOpen(false);
    onCancel?.();
  };

  return (
    <Dialog open={internalOpen} onClose={() => setInternalOpen(false)} minHeight="auto">
      <div className={classes.title}>{title}</div>
      <div className={classes.message}>{message}</div>
      <div className={classes.actions}>
        <Button className={classes.button} onClick={onConfirm}>
          {confirmButtonText}
        </Button>
        <Button className={classes.button} onClick={handleCancel}>
          {cancelButtonText}
        </Button>
      </div>
    </Dialog>
  );
}
