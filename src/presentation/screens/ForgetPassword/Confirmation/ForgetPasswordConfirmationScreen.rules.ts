import { useEffect } from "react"
import * as yup from "yup"

import { Toast } from "@/presentation/providers/Toast/ToastProvider"
import { useForm } from "@/presentation/hooks/UseForm"
import { IForgetPasswordConfirmationForm } from "@/presentation/screens/ForgetPassword/Confirmation/ForgetPasswordConfirmationScreen.types"
import { useConfirmForgetPasswordHook } from "@/presentation/hooks/UseConfirmForgetPasswordHook"
import { useRoutes } from "@/presentation/routes"

const defaultValues: IForgetPasswordConfirmationForm = {
  password: "",
  passwordConfirmation: "",
}

const schema: Record<keyof IForgetPasswordConfirmationForm, yup.AnySchema> = {
  password: yup.string().required(),
  passwordConfirmation: yup.string().required(),
}

export const useForgetPasswordConfirmationScreenRules = () => {
  const form = useForm<IForgetPasswordConfirmationForm>({
    defaultValues,
    schema,
  })

  const navigation = useRoutes()
  const routeParams = navigation.getRouteParams("ForgetPasswordConfirmation")

  const email = routeParams?.email || ""

  const confirmForgetPassword = useConfirmForgetPasswordHook()

  const handleSubmit = form.handleSubmit(
    (data: IForgetPasswordConfirmationForm) => {
      confirmForgetPassword.handleFetch({
        email,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
      })
    },
  )

  useEffect(() => {
    if (confirmForgetPassword.isSuccess) {
      Toast({
        type: "success",
        text1: "Senha alterada com sucesso!",
      })

      confirmForgetPassword.handleResetState()

      navigation.handleNavigate("SignIn")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmForgetPassword.isSuccess])

  useEffect(() => {
    if (confirmForgetPassword.error) {
      Toast({ type: "error", text1: confirmForgetPassword.error })

      confirmForgetPassword.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmForgetPassword.error])

  return {
    values: form.values,
    errors: form.errors,
    isWaiting: confirmForgetPassword.isWaiting,
    handleSetValue: form.handleSetValue,
    handleSubmit,
  }
}
