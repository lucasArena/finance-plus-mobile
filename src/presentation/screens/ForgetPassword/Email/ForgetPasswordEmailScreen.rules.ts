import { useEffect } from "react"
import * as yup from "yup"

import { Toast } from "@/presentation/providers/Toast/ToastProvider"
import { useForm } from "@/presentation/hooks/UseForm"
import { IForgetPasswordEmailForm } from "@/presentation/screens/ForgetPassword/Email/ForgetPasswordEmailScreen.types"
import { useSendUserCodeForgetPasswordHook } from "@/presentation/hooks/UseSendUserCodeForgetPasswordHook"
import { useRoutes } from "@/presentation/routes"

const defaultValues: IForgetPasswordEmailForm = {
  email: "",
}

const schema = {
  email: yup.string().email().required(),
}

export const useForgetPasswordScreenRules = () => {
  const userCodeForgetPassword = useSendUserCodeForgetPasswordHook()

  const navigation = useRoutes()
  const form = useForm<IForgetPasswordEmailForm>({
    defaultValues,
    schema,
  })

  const values = form.values

  const handleSubmit = form.handleSubmit((data: IForgetPasswordEmailForm) => {
    userCodeForgetPassword.handleFetch({
      email: data.email,
    })
  })

  useEffect(() => {
    if (userCodeForgetPassword.isSuccess) {
      navigation.handleNavigate("ForgetPasswordValidationCode", {
        email: values.email,
      })

      userCodeForgetPassword.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCodeForgetPassword.isSuccess])

  useEffect(() => {
    if (userCodeForgetPassword.error) {
      Toast({ type: "error", text1: userCodeForgetPassword.error })

      userCodeForgetPassword.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCodeForgetPassword.error])

  return {
    values,
    errors: form.errors,
    isWaiting: userCodeForgetPassword.isWaiting,
    handleSetValue: form.handleSetValue,
    handleSubmit,
  }
}
