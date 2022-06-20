import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../../../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url?: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthProps = {
  children: React.ReactNode; // 👈️ type children
};

const AuthProvider: React.FC = ({ children }: any) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@portalubicua:token');
    const user = localStorage.getItem('@portalubicua:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      //api.defaults.headers.authorization = `Bearer ${token}`; deprecated

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@portalubicua:token', token);
    localStorage.setItem('@portalubicua:user', JSON.stringify(user));

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //api.defaults.headers.authorization = `Bearer ${token}`; deprecated

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@portalubicua:token');
    localStorage.removeItem('@portalubicua:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@portalubicua:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  /* if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  } */

  return context;
}

export { AuthProvider, useAuth };
