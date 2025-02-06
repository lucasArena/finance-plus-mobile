import { IListExpensesByDateScreenProps } from "@/presentation/screens/ListExpensesByDate/ListExpensesByDateScreen.types"

export interface IRoutes {
  SignIn: void
  SignUp: void
  Home: void
  Profile: void
  ListExpensesByDate: IListExpensesByDateScreenProps
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
