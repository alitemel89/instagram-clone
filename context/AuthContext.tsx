import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { auth, signInWithGoogle } from '../firebase'

type authContextType = {
  currentUser: any
  login: () => void
  logout: () => void
}

const authContextDefaultValues: authContextType = {
  currentUser: null,
  login: () => {},
  logout: () => {},
}

type Props = {
  children: ReactNode
}


const AuthContext = createContext<authContextType>(authContextDefaultValues)

export function useAuth() {
  return useContext(AuthContext)
}


export function AuthProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<boolean | any>(null)

  const unsubscribeFromAuth = () => null

  useEffect(() => {
    auth.onAuthStateChanged((user) => setCurrentUser(user))

    return () => unsubscribeFromAuth();
  }, [])

  const login = () => {}

  const logout = () => {
    auth.signOut()
    setCurrentUser(false)
  }

  const value = {
    currentUser,
    login,
    logout,
  }
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  )
}
