import React, { createContext, useContext } from "react"
import { IAuthContext, IAuthProviderProps } from "./AuthProvider.types"
import { useAuthProvider } from "@/presentation/providers/Auth/AuthProvider.rules"

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const AuthProvider: React.FC<
  React.PropsWithChildren<IAuthProviderProps>
> = ({ children, ...props }) => {
  const rules = useAuthProvider(props)

  return <AuthContext.Provider value={rules}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}
