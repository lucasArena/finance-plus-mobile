import React from "react"

import { SignInScreen } from "@/presentation/screens/SignIn/SignInScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SignUpScreen } from "@/presentation/screens/SignUp/SignUpScreen"
import { HomeScreen } from "@/presentation/screens/Home/HomeScreen"
import { useAuth } from "@/presentation/providers/Auth/AuthProvider"

export const ReactNavigationRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator()
  const auth = useAuth()

  console.log("routes", auth.token)
  const isUserAutheticated = !!auth.token

  return (
    <NavigationContainer>
      {isUserAutheticated ? (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}
