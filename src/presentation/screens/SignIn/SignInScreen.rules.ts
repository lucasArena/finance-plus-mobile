import { useEffect } from "react"
import * as yup from "yup"

import { useForm } from "@/presentation/hooks/UseForm"
import { useRoutes } from "@/presentation/routes"
import { ISignInScreenForm } from "@/presentation/screens/SignIn/SignInScreen.types"
import { useUserSignInHook } from "@/presentation/hooks/UseUserSignInHook"

const schema = {
  email: yup.string().email().required(),
  password: yup.string().required(),
}

export const useSignInScreenRules = () => {
  const navigation = useRoutes()
  const form = useForm<ISignInScreenForm>({ schema })

  const userSignIn = useUserSignInHook()

  const handlePressSignUp = () => {
    navigation.handleNavigate("SignUp")
  }

  const handleSignIn = (fields: ISignInScreenForm) => {
    userSignIn.handleFetch({ email: fields.email, password: fields.password })
  }

  useEffect(() => {
    if (userSignIn.isSuccess) {
      console.log(userSignIn.data)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSignIn.isSuccess])

  return {
    isWaiting: userSignIn.isWaiting,
    values: form.values,
    errors: form.errors,
    handleSetValue: form.handleSetValue,
    handlePressSignUp,
    handleSubmit: form.handleSubmit(handleSignIn),
  }
}
