import React, { useEffect } from 'react';
import { ReactComponent as CloseIcon } from 'assets/components/toast/close.svg';
import { ReactComponent as ErrorIcon } from 'assets/components/toast/error.svg';
import { ReactComponent as InfoIcon } from 'assets/components/toast/info.svg';
import { ReactComponent as SuccessIcon } from 'assets/components/toast/success.svg';
import { ReactComponent as WarnIcon } from 'assets/components/toast/warn.svg';
import Typography from 'components/base/Typography';
import useToast from 'hooks/useToast';
import { ToastData } from 'models/ToastContext';

type ToastProps = ToastData;

const Toast: React.FC<ToastProps> = (props) => {
  const { id, type, message } = props;

  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleCloseButtonClick = () => removeToast(id);

  switch (type) {
    case 'success':
      return (
        <div className="flex flex-row justify-between items-center min-w-[160px] bg-primary px-2 py-1 rounded-md gap-8 shadow-md">
          <div className="flex flex-row gap-1 items-center">
            <SuccessIcon />
            <Typography type="body" className="text-white">
              {message}
            </Typography>
          </div>
          <button type="button" onClick={handleCloseButtonClick}>
            <CloseIcon />
          </button>
        </div>
      );
    case 'error':
      return (
        <div className="flex flex-row justify-between items-center min-w-[160px] bg-red-500 px-2 py-1 rounded-md gap-8 shadow-md">
          <div className="flex flex-row gap-1 items-center">
            <ErrorIcon />
            <Typography type="body" className="text-white">
              {message}
            </Typography>
          </div>
          <button type="button" onClick={handleCloseButtonClick}>
            <CloseIcon />
          </button>
        </div>
      );
    case 'warn':
      return (
        <div className="flex flex-row justify-between items-center min-w-[160px] bg-amber-500 px-2 py-1 rounded-md gap-8 shadow-md">
          <div className="flex flex-row gap-1 items-center">
            <WarnIcon />
            <Typography type="body" className="text-white">
              {message}
            </Typography>
          </div>
          <button type="button" onClick={handleCloseButtonClick}>
            <CloseIcon />
          </button>
        </div>
      );
    case 'info':
    default:
      return (
        <div className="flex flex-row justify-between items-center min-w-[160px] bg-sky-500 px-2 py-1 rounded-md gap-8 shadow-md">
          <div className="flex flex-row gap-1 items-center">
            <InfoIcon />
            <Typography type="body" className="text-white">
              {message}
            </Typography>
          </div>
          <button type="button" onClick={handleCloseButtonClick}>
            <CloseIcon />
          </button>
        </div>
      );
  }
};

export default Toast;
