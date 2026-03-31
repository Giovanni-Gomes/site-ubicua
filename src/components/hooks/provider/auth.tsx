import React, { createContext, useCallback, useState, useContext } from 'react'
import api from '../../../services/api'
import { STORAGE_KEYS } from '../../../config/branding'

interface User {
  id: string
  name: string
  email: string
  avatar_url?: string
}

interface AuthState {
  token: string
  user: User
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
  updateUser(user: User): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

type AuthProps = {
  children?: JSX.Element // React.ReactNode; // 👈️ type children
}

const AuthProvider = (props: AuthProps) => {
  // const AuthProvider: React.FC = (props: AuthProps) =>
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(STORAGE_KEYS.token)
    const user = localStorage.getItem(STORAGE_KEYS.user)

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      // api.defaults.headers.authorization = `Bearer ${token}`; deprecated

      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('/v1/login', {
      email,
      password,
    })

    const { token, user } = response.data

    localStorage.setItem(STORAGE_KEYS.token, token)
    localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user))

    api.defaults.headers.common.Authorization = `Bearer ${token}`
    // api.defaults.headers.authorization = `Bearer ${token}`; deprecated

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.token)
    localStorage.removeItem(STORAGE_KEYS.user)

    setData({} as AuthState)
  }, [])

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user))

      setData({
        token: data.token,
        user,
      })
    },
    [setData, data.token],
  )

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  /* if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  } */

  return context
}

export { AuthProvider, useAuth }
