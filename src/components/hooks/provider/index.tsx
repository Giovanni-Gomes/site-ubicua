import React, { AllHTMLAttributes } from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

type AppProps = {
  children?: React.ReactNode; // 👈️ type children
}

const AppProvider: React.FC = ({ children }: AppProps) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
}

export default AppProvider;

// const AppProvider = ({ children }: any) => (

//   <AuthProvider>
//     <ToastProvider>{children}</ToastProvider>
//   </AuthProvider>

// );

