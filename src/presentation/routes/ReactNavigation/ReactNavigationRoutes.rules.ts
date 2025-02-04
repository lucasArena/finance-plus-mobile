import { NavigationProp, useNavigation } from "@react-navigation/native"

import {
  IRoutes,
  IRoutesRules,
  TRouteNames,
} from "@/presentation/routes/Routes.types"

export const useReactNavigationRoutes = (): IRoutesRules => {
  const reactNavigation = useNavigation<NavigationProp<IRoutes>>()

  const handleNavigate = <TRouteName extends TRouteNames>(
    pageName: TRouteName,
    ...params: IRoutes[TRouteName] extends void ? [] : [IRoutes[TRouteName]]
  ) => {
    reactNavigation.navigate(pageName as TRouteName, params as any)
  }

  const handleGoBack = () => {
    if (reactNavigation.canGoBack()) {
      reactNavigation.goBack()
    }
  }

  return { handleNavigate, handleGoBack }
}
