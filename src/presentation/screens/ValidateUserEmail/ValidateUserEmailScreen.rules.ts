import { useEffect, useState } from "react"

import { useSendUserCodeEmailHook } from "@/presentation/hooks/UseSendUserCodeEmailHook"
import { useValidateUserCodeEmailHook } from "@/presentation/hooks/UseValidateUserCodeEmailHook"
import { useAuth } from "@/presentation/providers/Auth/AuthProvider"
import { Toast } from "@/presentation/providers/Toast/ToastProvider"
import { useRoutes } from "@/presentation/routes"
import { Token } from "@/application/utils/Token/Jwt/TokenJwt"

export const useValidateUserEmailScreenRules = () => {
  const [code, setCode] = useState<string>("")

  const token = new Token()
  const navigation = useRoutes()

  const params = navigation.getRouteParams("ValidateUserEmail")

  const auth = useAuth()
  const userSendActivationCodeHook = useSendUserCodeEmailHook()
  const userValidateActivationCodeHook = useValidateUserCodeEmailHook()

  const tokenDecrypted = token.decrypt(params!.token)
  const userKey = tokenDecrypted?.key || ""

  const handleValidateCode = () => {
    userValidateActivationCodeHook.handleFetch({
      code,
      userKey,
    })
  }

  const handleReSendCode = () => {
    userSendActivationCodeHook.handleFetch({ userKey })
  }

  useEffect(() => {
    if (userSendActivationCodeHook.isSuccess) {
      Toast({
        type: "success",
        text1: "Código de validação enviado novamente para o seu e-mail",
      })

      userSendActivationCodeHook.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSendActivationCodeHook.isSuccess])

  useEffect(() => {
    if (userSendActivationCodeHook.error) {
      Toast({ type: "error", text1: userSendActivationCodeHook.error })

      userSendActivationCodeHook.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSendActivationCodeHook.error])

  useEffect(() => {
    if (userValidateActivationCodeHook.isSuccess) {
      auth.signIn(
        token.encrypt({
          ...tokenDecrypted,
          activatedAt: new Date(),
        }),
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userValidateActivationCodeHook.isSuccess])

  useEffect(() => {
    if (userValidateActivationCodeHook.error) {
      Toast({ type: "error", text1: userValidateActivationCodeHook.error })

      userValidateActivationCodeHook.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userValidateActivationCodeHook.error])

  return {
    code,
    isWaitingResend: userSendActivationCodeHook.isWaiting,
    isWaitingValidate: userValidateActivationCodeHook.isWaiting,
    setCode,
    handleValidateCode,
    handleReSendCode,
  }
}
