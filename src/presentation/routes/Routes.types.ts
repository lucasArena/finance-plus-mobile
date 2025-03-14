import { IListExpensesByDateScreenProps } from "@/presentation/screens/ListExpensesByDate/ListExpensesByDateScreen.types"
import { IValidateUserEmailScreenProps } from "@/presentation/screens/ValidateUserEmail/ValidateUserEmailScreen.types"
import { IForgetPasswordValidationCodeProps } from "@/presentation/screens/ForgetPassword/ValidationCode/ForgetPasswordValidationCode.types"
import { IForgetPasswordConfirmationProps } from "@/presentation/screens/ForgetPassword/Confirmation/ForgetPasswordConfirmationScreen.types"

export interface IRoutes {
  SignIn: void
  SignUp: void
  PolicyAndTerms: void
  ForgetPasswordEmail: void
  ForgetPasswordValidationCode: IForgetPasswordValidationCodeProps
  ForgetPasswordConfirmation: IForgetPasswordConfirmationProps
  Home: void
  Profile: void
  ListExpensesByDate: IListExpensesByDateScreenProps
  ValidateUserEmail: IValidateUserEmailScreenProps
}

export type TRouteNames = keyof IRoutes

export interface IRoutesRules {
  handleNavigate<RouteName extends TRouteNames>(
    pageName: RouteName,
    ...params: IRoutes[RouteName] extends void ? [] : [IRoutes[RouteName]]
  ): void
  handleGoBack: () => void
  getRouteParams: <RouteName extends TRouteNames>(
    pageName: RouteName,
  ) => IRoutes[RouteName] | undefined
}
