import { Dispatch, createContext } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warn';

export type ToastData = {
  id: string;
  type: ToastType;
  message: string;
};

export type ToastContextType = {
  addToast: (message: string, type: ToastType) => string;
  removeToast: (id: string) => void;
};

type Action =
  | { type: 'add'; payload: Omit<ToastData, 'id'> }
  | { type: 'remove'; id: string };

type ToastDispatch = Dispatch<Action>;

export const ToastDispatchContext = createContext<ToastDispatch | undefined>(
  undefined
);

export const ToastReducer = (state: ToastData[], action: Action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          ...action.payload,
          id: Date.now().toString() + Math.random().toString(),
        },
      ];
    case 'remove':
      return state.filter((toast) => toast.id !== action.id);
    default:
      return state;
  }
};
