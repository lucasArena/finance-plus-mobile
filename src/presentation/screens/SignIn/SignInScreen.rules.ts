import { useEffect } from "react"
import * as yup from "yup"

import { useForm } from "@/presentation/hooks/UseForm"
import { useRoutes } from "@/presentation/routes"
import { ISignInScreenForm } from "@/presentation/screens/SignIn/SignInScreen.types"
import { useUserSignInHook } from "@/presentation/hooks/UseUserSignInHook"
import { useAuth } from "@/presentation/providers/Auth/AuthProvider"
import { Toast } from "@/presentation/providers/Toast/ToastProvider"
import { Token } from "@/application/utils/Token/Jwt/TokenJwt"
import { useSendUserCodeEmailHook } from "@/presentation/hooks/UseSendUserCodeEmailHook"

const schema = {
  email: yup.string().email().required(),
  password: yup.string().required(),
  rememberMe: yup.boolean().notRequired(),
  showPassword: yup.boolean().notRequired(),
}

export const useSignInScreenRules = () => {
  const navigation = useRoutes()
  const form = useForm<ISignInScreenForm>({ schema })
  const auth = useAuth()

  const token = new Token()

  const userSendActivationCodeHook = useSendUserCodeEmailHook()
  const userSignIn = useUserSignInHook()

  const handlePressSignUp = () => {
    navigation.handleNavigate("SignUp")
  }

  const handlePressRecoverPassword = () => {
    navigation.handleNavigate("ForgetPasswordEmail")
  }

  const handleSignIn = (fields: ISignInScreenForm) => {
    userSignIn.handleFetch({ email: fields.email, password: fields.password })
  }

  useEffect(() => {
    if (userSignIn.isSuccess) {
      const safeToken = userSignIn.data?.token!
      const decrypted = token.decrypt(safeToken)
      const safeUserKey = decrypted?.key || ""

      if (!decrypted?.activatedAt) {
        userSendActivationCodeHook.handleFetch({
          userKey: safeUserKey,
        })
        return navigation.handleNavigate("ValidateUserEmail", {
          token: safeToken,
        })
      }

      auth.signIn(userSignIn.data!.token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSignIn.isSuccess])

  useEffect(() => {
    if (userSignIn.error) {
      Toast({ type: "error", text1: userSignIn.error })

      userSignIn.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSignIn.error])

  return {
    isWaiting: userSignIn.isWaiting,
    values: form.values,
    errors: form.errors,
    handleSubmit: form.handleSubmit(handleSignIn),
    handleSetValue: form.handleSetValue,
    handlePressSignUp,
    handlePressRecoverPassword,
  }
}
