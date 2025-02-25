import { useEffect, useState } from "react"

import { Toast } from "@/presentation/providers/Toast/ToastProvider"
import { useRoutes } from "@/presentation/routes"
import { useSendUserCodeForgetPasswordHook } from "@/presentation/hooks/UseSendUserCodeForgetPasswordHook"
import { useValidateUserCodeForgetPasswordHook } from "@/presentation/hooks/UseValidateUserCodeForgetPasswordHook"

export const useForgetPasswordValidationCodeRules = () => {
  const [code, setCode] = useState<string>("")

  const navigation = useRoutes()

  const params = navigation.getRouteParams("ForgetPasswordValidationCode")

  const validateUserCodeForgetPasswordHook =
    useValidateUserCodeForgetPasswordHook()
  const sendUserCodeForgetPasswordHook = useSendUserCodeForgetPasswordHook()

  const userEmail = params?.email || ""

  const handleValidateCode = () => {
    validateUserCodeForgetPasswordHook.handleFetch({ email: userEmail, code })
  }

  const handleReSendCode = () => {
    sendUserCodeForgetPasswordHook.handleFetch({ email: userEmail })
  }

  useEffect(() => {
    if (validateUserCodeForgetPasswordHook.isSuccess) {
      navigation.handleNavigate("ForgetPasswordConfirmation", {
        email: userEmail,
      })

      validateUserCodeForgetPasswordHook.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateUserCodeForgetPasswordHook.isSuccess])

  useEffect(() => {
    if (validateUserCodeForgetPasswordHook.error) {
      Toast({ type: "error", text1: validateUserCodeForgetPasswordHook.error })

      validateUserCodeForgetPasswordHook.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateUserCodeForgetPasswordHook.error])

  useEffect(() => {
    if (sendUserCodeForgetPasswordHook.isSuccess) {
      Toast({
        type: "success",
        text1: "Código de validação enviado novamente para o seu e-mail",
      })

      sendUserCodeForgetPasswordHook.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendUserCodeForgetPasswordHook.isSuccess])

  useEffect(() => {
    if (sendUserCodeForgetPasswordHook.error) {
      Toast({ type: "error", text1: sendUserCodeForgetPasswordHook.error })

      sendUserCodeForgetPasswordHook.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendUserCodeForgetPasswordHook.error])

  return {
    code,
    isWaitingResend: sendUserCodeForgetPasswordHook.isWaiting,
    isWaitingValidate: validateUserCodeForgetPasswordHook.isWaiting,
    setCode,
    handleValidateCode,
    handleReSendCode,
  }
}
