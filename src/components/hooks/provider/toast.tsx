import React, { createContext, useContext, useCallback, useState, ReactChild, ReactChildren } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToastContainer from '../../Shared/ToastContainer';


export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

interface ToastContexData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContexData>({} as ToastContexData);

type ToastProps = {
  children?: React.ReactNode; // 👈️ type children
};

const ToastProvider: React.FC = ({ children }: any) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuidv4();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages((oldMessages) => [...oldMessages, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContexData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
export { ToastProvider, useToast };
