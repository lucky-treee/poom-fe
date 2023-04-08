import { useContext } from 'react';
import { ToastDispatchContext, ToastType } from 'models/ToastContext';

const useToast = () => {
  const dispatch = useContext(ToastDispatchContext);

  type AddToastParams = {
    message: string;
    type: ToastType;
  };

  const addToast = ({ message, type }: AddToastParams) => {
    dispatch &&
      dispatch({
        type: 'add',
        payload: {
          message,
          type,
        },
      });
  };

  const removeToast = (id: string) => {
    dispatch && dispatch({ type: 'remove', id });
  };

  return { addToast, removeToast };
};

export default useToast;
