import React, { AllHTMLAttributes } from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

type AppProps = {
  children?: JSX.Element;//React.ReactNode | any; // 👈️ type children
}

const AppProvider = (props: AppProps) => { //const AppProvider: React.FC = (props: AppProps) => {
  return (

    <AuthProvider>
      <ToastProvider>{props.children}</ToastProvider>
    </AuthProvider>

  );
}

export default AppProvider;

// const AppProvider = ({ children }: any) => (

//   <AuthProvider>
//     <ToastProvider>{children}</ToastProvider>
//   </AuthProvider>

// );

