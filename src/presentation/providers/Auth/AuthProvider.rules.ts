import { useEffect, useState } from "react"

import { makeAsyncStorageFactory } from "@/application/factories/infra/Storage/AsyncStorageFactory"
import {
  IAuthContext,
  IAuthProviderProps,
} from "@/presentation/providers/Auth/AuthProvider.types"

export const useAuthProvider = (props: IAuthProviderProps): IAuthContext => {
  const [token, setToken] = useState<string | null>(null)
  const storage = props.storage ?? makeAsyncStorageFactory()

  const signIn = async (signInToken: string) => {
    await storage.setItem("token", signInToken)
    setToken(signInToken)
  }

  const signOut = async () => {
    await storage.removeItem("token")
    setToken(null)
  }

  useEffect(() => {
    if (!token) {
      storage.getItem("token").then(setToken)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { token, signIn, signOut }
}
