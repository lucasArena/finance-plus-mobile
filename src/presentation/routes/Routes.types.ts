export interface IRoutes {
  SignIn: void
  SignUp: void
}

export type TRouteNames = keyof IRoutes

export interface IRoutesRules {
  handleNavigate<RouteName extends TRouteNames>(
    pageName: RouteName,
    ...params: IRoutes[RouteName] extends void ? [] : [IRoutes[RouteName]]
  ): void
}
