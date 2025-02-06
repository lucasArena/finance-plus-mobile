import { useEffect, useMemo, useState } from "react"

import { makeAsyncStorageFactory } from "@/application/factories/infra/Storage/AsyncStorageFactory"
import {
  IAuthContext,
  IAuthProviderProps,
} from "@/presentation/providers/Auth/AuthProvider.types"
import { HttpClientBase } from "@/infra/HttpClient/HttpClient"
import { Token } from "@/application/utils/Token/Jwt/TokenJwt"

const tokenJwt = new Token()

export const useAuthProvider = (props: IAuthProviderProps): IAuthContext => {
  const [token, setToken] = useState<string | null>(null)
  const storage = props.storage ?? makeAsyncStorageFactory()

  const tokenDecrypted = useMemo(() => {
    return token ? tokenJwt.decrypt(token) : null
  }, [token])

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
      storage.getItem("token").then(responseToken => {
        setToken(responseToken)

        HttpClientBase.setToken(responseToken!)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { token, tokenDecrypted, signIn, signOut }
}
