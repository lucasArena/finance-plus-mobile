import { useEffect } from "react"
import * as yup from "yup"

import { useForm } from "@/presentation/hooks/UseForm"
import { useRoutes } from "@/presentation/routes"
import { useAuthFacadeHook } from "@/presentation/hooks/UseAuthFacadeHook"
import { ISignUpScreenForm } from "@/presentation/screens/SignUp/SignUpScreen.types"
import { useAuth } from "@/presentation/providers/Auth/AuthProvider"
import { Toast } from "@/presentation/providers/Toast/ToastProvider"

const schema = {
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  showPassword: yup.boolean().notRequired(),
}

export const useSignUpRules = () => {
  const navigation = useRoutes()
  const form = useForm<ISignUpScreenForm>({ schema })

  const authProvider = useAuth()
  const authFacade = useAuthFacadeHook()

  const handlePressNavigateToSignIn = () => {
    navigation.handleGoBack()
  }

  const handleSignUp = (fields: ISignUpScreenForm) => {
    authFacade.handleFetch({
      name: fields.name,
      email: fields.email,
      password: fields.password,
    })
  }

  useEffect(() => {
    if (authFacade.isSuccess) {
      authProvider.signIn(authFacade.data!.token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authFacade.isSuccess])

  useEffect(() => {
    if (authFacade.error) {
      Toast({ type: "error", text1: authFacade.error })

      authFacade.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authFacade.error])

  return {
    isWaiting: authFacade.isWaiting,
    values: form.values,
    errors: form.errors,
    handleSubmit: form.handleSubmit(handleSignUp),
    handleSetValue: form.handleSetValue,
    handlePressNavigateToSignIn,
  }
}
