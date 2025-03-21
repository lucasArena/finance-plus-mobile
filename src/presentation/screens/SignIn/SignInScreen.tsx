import React from "react"
import { Platform, TouchableWithoutFeedback, View } from "react-native"

import { ButtonComponent } from "@/presentation/components/Button/ButtonComponent"
import { useSignInScreenRules } from "@/presentation/screens/SignIn/SignInScreen.rules"

import { InputTextComponent } from "@/presentation/components/Input/Text/InputTextComponent"
import { useSignInScreenStyles } from "@/presentation/screens/SignIn/SignInScreen.styles"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useTheme } from "@/presentation/theme/Theme"
import { DividerComponent } from "@/presentation/components/Divider/DividerComponent"
import { KeyboarAvoidingViewComponent } from "@/presentation/components/KeyboardAvoidingView/KeyboardAvoidingViewComponent"

import AppleLogo from "@/presentation/assets/apple-logo.svg"
import AppLogo from "@/presentation/assets/blue-fin-logo.svg"
import EyeClosedLogo from "@/presentation/assets/eye-closed.svg"
import EyeOpendLogo from "@/presentation/assets/eye-opened.svg"

export const SignInScreen = () => {
  const theme = useTheme()

  const styles = useSignInScreenStyles()
  const rules = useSignInScreenRules()

  return (
    <KeyboarAvoidingViewComponent>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <AppLogo />

          <TextComponent size={14} color={theme.white.light} weight={500}>
            Entre com seu e-mail e sua senha para continuar
          </TextComponent>
        </View>

        <View style={styles.mainContainer}>
          <InputTextComponent
            label="E-mail"
            placeholder="Digite seu e-mail"
            value={rules.values.email}
            disabled={rules.isWaiting}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={value => rules.handleSetValue("email", value)}
            error={!!rules.errors.email}
            helperText={rules.errors.email?.message}
          />

          <InputTextComponent
            label="Senha"
            placeholder="Digite sua senha"
            {...(!rules.values.showPassword && { secureTextEntry: true })}
            value={rules.values.password}
            disabled={rules.isWaiting}
            error={!!rules.errors.password}
            helperText={rules.errors.email?.password}
            endIcon={
              <TouchableWithoutFeedback
                onPress={() =>
                  rules.handleSetValue(
                    "showPassword",
                    !rules.values.showPassword,
                  )
                }>
                {rules.values.showPassword ? (
                  <EyeOpendLogo />
                ) : (
                  <EyeClosedLogo />
                )}
              </TouchableWithoutFeedback>
            }
            onChangeText={value => rules.handleSetValue("password", value)}
          />

          <View style={styles.signInAdditionalsContainer}>
            <TextComponent
              color={theme.white.light}
              size={10}
              weight={600}
              underlined
              onPress={() => rules.handlePressRecoverPassword()}>
              Esqueci minha senha
            </TextComponent>
          </View>
          <ButtonComponent
            loading={rules.isWaiting}
            variant="primary"
            onPress={rules.handleSubmit}
            disabled={rules.isWaiting}>
            Entrar
          </ButtonComponent>

          <View style={styles.signInVariantsDivider}>
            <DividerComponent color={theme.white.light} height={1} fullWidth />

            <TextComponent
              style={styles.signInVariantsDividerText}
              color={theme.white.light}
              size={10}
              weight={600}>
              Ou entre com
            </TextComponent>

            <DividerComponent color={theme.white.light} height={1} fullWidth />
          </View>

          <View style={styles.signInOptionsContainer}>
            {Platform.OS === "ios" && (
              <ButtonComponent
                variant="secondary"
                fullWidth
                disabled={rules.isWaiting}
                startIcon={<AppleLogo />}
                onPress={() => rules.handleAppleSignIn()}>
                Apple
              </ButtonComponent>
            )}
          </View>

          <View style={styles.signUpContainer}>
            <TextComponent color={theme.white.light} size={10} weight={600}>
              Ainda não tem uma conta?{" "}
              <TextComponent
                color={theme.white.light}
                size={10}
                weight={600}
                underlined
                onPress={() => rules.handlePressSignUp()}>
                Cadastre aqui
              </TextComponent>
            </TextComponent>
          </View>
        </View>
      </View>
    </KeyboarAvoidingViewComponent>
  )
}
