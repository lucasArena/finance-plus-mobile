import React from "react"
import { SafeAreaView } from "react-native"

import { ButtonComponent } from "@/presentation/components/Button/ButtonComponent"
import { useSignInScreenRules } from "@/presentation/screens/SignIn/SignInScreen.rules"
import { InputFieldComponent } from "@/presentation/components/Input/Field/InputTextComponent"

export const SignInScreen = () => {
  const rules = useSignInScreenRules()

  return (
    <SafeAreaView>
      <InputFieldComponent
        label="Email"
        value={rules.values.email}
        autoCapitalize="none"
        onChangeText={value => rules.handleSetValue("email", value)}
        error={!!rules.errors.email}
        helperText={rules.errors.email?.message}
      />

      <InputFieldComponent
        label="Password"
        secureTextEntry
        value={rules.values.password}
        error={!!rules.errors.password}
        helperText={rules.errors.email?.password}
        onChangeText={value => rules.handleSetValue("password", value)}
      />

      <ButtonComponent
        mode="contained"
        onPress={rules.handleSubmit}
        disabled={rules.isWaiting}
        loading={rules.isWaiting}>
        Entrar
      </ButtonComponent>

      <ButtonComponent
        mode="contained"
        onPress={() => rules.handlePressSignUp()}>
        Cadastrar-se
      </ButtonComponent>
    </SafeAreaView>
  )
}
