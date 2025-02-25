import React from "react"
import BootSplash from "react-native-bootsplash"

import { SignInScreen } from "@/presentation/screens/SignIn/SignInScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SignUpScreen } from "@/presentation/screens/SignUp/SignUpScreen"
import { HomeScreen } from "@/presentation/screens/Home/HomeScreen"
import { useAuth } from "@/presentation/providers/Auth/AuthProvider"
import { ProfileScreen } from "@/presentation/screens/Profile/ProfileScreen"
import { ListExpensesByDateScreen } from "@/presentation/screens/ListExpensesByDate/ListExpensesByDateScreen"
import { ValidateUserEmailScreen } from "@/presentation/screens/ValidateUserEmail/ValidateUserEmailScreen"
import { ForgetPasswordEmailScreen } from "@/presentation/screens/ForgetPassword/Email/ForgetPasswordEmailScreen"
import { ForgetPasswordValidationCodeScreen } from "@/presentation/screens/ForgetPassword/ValidationCode/ForgetPasswordValidationCode"
import { ForgetPasswordConfirmationScreen } from "@/presentation/screens/ForgetPassword/Confirmation/ForgetPasswordConfirmationScreen"

export const ReactNavigationRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator()
  const auth = useAuth()

  const isUserAutheticated = !!auth.token

  return (
    <NavigationContainer
      onReady={() => {
        setTimeout(() => BootSplash.hide({ fade: true }), 1000)
      }}>
      {isUserAutheticated ? (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen
            name="ListExpensesByDate"
            component={ListExpensesByDateScreen as any}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen
            name="ValidateUserEmail"
            component={ValidateUserEmailScreen}
          />
          <Stack.Screen
            name="ForgetPasswordEmail"
            component={ForgetPasswordEmailScreen}
          />
          <Stack.Screen
            name="ForgetPasswordValidationCode"
            component={ForgetPasswordValidationCodeScreen}
          />
          <Stack.Screen
            name="ForgetPasswordConfirmation"
            component={ForgetPasswordConfirmationScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}
