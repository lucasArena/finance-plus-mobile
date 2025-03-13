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
import AppleSignIn from "@invertase/react-native-apple-authentication"

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

  const handleAppleSignIn = async () => {
    console.log("ENTROU")
    // performs login request
    try {
      const appleAuthRequestResponse = await AppleSignIn.performRequest({
        requestedOperation: AppleSignIn.Operation.LOGIN,
        // Note: it appears putting FULL_NAME first is important, see issue #293
        requestedScopes: [AppleSignIn.Scope.FULL_NAME, AppleSignIn.Scope.EMAIL],
      })

      // get current authentication state for user
      // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
      const credentialState = await AppleSignIn.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      )

      // use credentialState response to ensure the user is authenticated
      if (credentialState === AppleSignIn.State.AUTHORIZED) {
        appleAuthRequestResponse.user
      }
    } catch (error) {
      console.log("error", error)
    }
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
    handleAppleSignIn,
    handleSetValue: form.handleSetValue,
    handlePressSignUp,
    handlePressRecoverPassword,
  }
}
