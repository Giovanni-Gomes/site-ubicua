import React, { AllHTMLAttributes } from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

type AppProps = {
  children?: React.ReactNode; // 👈️ type children
}

const AppProvider: React.FC = ({ children }: any) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
}

export default AppProvider;
