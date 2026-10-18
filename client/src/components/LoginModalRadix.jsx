import * as Dialog from "@radix-ui/react-dialog";
import AuthForm from "./AuthForm";
import classes from "./LoginModalRadix.module.css";

function LoginModalRadix({ open, onClose }) {
  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.overlay} />
        <Dialog.Content className={classes.modal} aria-describedby={undefined}>
          <AuthForm Title={Dialog.Title} />
          <Dialog.Close className={classes.closeButton} aria-label="Close">
            ×
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default LoginModalRadix;
