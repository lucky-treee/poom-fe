import React, { ReactNode, useReducer } from 'react';
import Toast from 'components/base/Toast';
import {
  ToastContext,
  ToastDispatchContext,
  ToastReducer,
} from 'models/ToastContext';

type ToastContainerProps = {
  children?: ReactNode;
};

const ToastProvider: React.FC<ToastContainerProps> = (props) => {
  const { children } = props;

  const [toastList, dispatch] = useReducer(ToastReducer, []);

  return (
    <ToastDispatchContext.Provider value={dispatch}>
      <ToastContext.Provider value={toastList}>
        {children}
        <div className="absolute top-8 right-4 flex flex-col gap-4 z-10">
          {toastList.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </div>
      </ToastContext.Provider>
    </ToastDispatchContext.Provider>
  );
};

export default ToastProvider;
