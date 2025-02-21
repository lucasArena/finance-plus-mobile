import { useEffect, useMemo, useState } from "react"

import { makeAsyncStorageFactory } from "@/application/factories/infra/Storage/AsyncStorageFactory"
import {
  IAuthContext,
  IAuthProviderProps,
} from "@/presentation/providers/Auth/AuthProvider.types"
import { HttpClientBase } from "@/infra/HttpClient/HttpClient"
import { Token } from "@/application/utils/Token/Jwt/TokenJwt"
import { Toast } from "@/presentation/providers/Toast/ToastProvider"

const tokenJwt = new Token()

export const useAuthProvider = (props: IAuthProviderProps): IAuthContext => {
  const [token, setToken] = useState<string | null>(null)
  const storage = props.storage ?? makeAsyncStorageFactory()

  const tokenDecrypted = useMemo(() => {
    return token ? tokenJwt.decrypt(token) : null
  }, [token])

  const signIn = async (signInToken: string) => {
    try {
      setToken(signInToken)
      HttpClientBase.setToken(signInToken)
      await storage.setItem("token", signInToken)
    } catch (error) {
      Toast({
        type: "error",
        text1: "Aconteceu algum erro inesperado. Tente novamente mais tarde",
      })
    }
  }

  const activateUser = async () => {
    try {
      const encryptedToken = tokenJwt.encrypt({
        ...tokenDecrypted,
        activatedAt: new Date(),
      })

      setToken(encryptedToken)
      await storage.setItem("token", encryptedToken)
    } catch (error) {
      console.log(error)

      Toast({
        type: "error",
        text1: "Aconteceu algum erro inesperado. Tente novamente mais tarde",
      })
    }
  }

  const signOut = async () => {
    try {
      await storage.removeItem("token")
      setToken(null)
    } catch (error) {
      Toast({
        type: "error",
        text1: "Aconteceu algum erro inesperado. Tente novamente mais tarde",
      })
    }
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

  return { token, tokenDecrypted, signIn, activateUser, signOut }
}
