import React from "react"
import { TouchableWithoutFeedback, View } from "react-native"

import { ButtonComponent } from "@/presentation/components/Button/ButtonComponent"
import { InputTextComponent } from "@/presentation/components/Input/Text/InputTextComponent"

import { useSignUpRules } from "@/presentation/screens/SignUp/SignUpScreen.rules"

import { useSignUpScreenStyles } from "@/presentation/screens/SignUp/SignUpScreen.styles"
import { KeyboarAvoidingViewComponent } from "@/presentation/components/KeyboardAvoidingView/KeyboardAvoidingViewComponent"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useTheme } from "@/presentation/theme/Theme"

import EyeOpendLogo from "@/presentation/assets/eye-opened.svg"
import EyeClosedLogo from "@/presentation/assets/eye-closed.svg"
import { CheckboxComponent } from "@/presentation/components/Checkbox/CheckboxComponent"

export const SignUpScreen = () => {
  const theme = useTheme()

  const styles = useSignUpScreenStyles()
  const rules = useSignUpRules()

  return (
    <KeyboarAvoidingViewComponent>
      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <TextComponent color={theme.white.light} size={18} weight={700}>
              Faça o seu cadastro aqui
            </TextComponent>
          </View>

          <View style={styles.formContainer}>
            <InputTextComponent
              label="Nome"
              placeholder="Insira seu nome"
              value={rules.values.name}
              disabled={rules.isWaiting}
              required
              autoCapitalize="none"
              onChangeText={value => rules.handleSetValue("name", value)}
              error={!!rules.errors.name}
              helperText={rules.errors.email?.message}
            />

            <InputTextComponent
              label="E-mail"
              placeholder="Digite seu e-mail"
              value={rules.values.email}
              disabled={rules.isWaiting}
              required
              autoCapitalize="none"
              onChangeText={value => rules.handleSetValue("email", value)}
              error={!!rules.errors.email}
              helperText={rules.errors.email?.message}
            />

            <InputTextComponent
              label="Senha"
              placeholder="Digite sua senha"
              required
              {...(!rules.values.showPassword && { secureTextEntry: true })}
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
              value={rules.values.password}
              error={!!rules.errors.password}
              disabled={rules.isWaiting}
              helperText={rules.errors.email?.password}
              onChangeText={value => rules.handleSetValue("password", value)}
            />

            <View style={styles.policyAndTermsContainer}>
              <CheckboxComponent
                isChecked={rules.values.useTerms}
                fillColor={theme.secondary.green}
                onPress={() =>
                  rules.handleSetValue("useTerms", !rules.values.useTerms)
                }
              />

              <TextComponent color={theme.white.light} size={14} weight={400}>
                Concordo com a{" "}
                <TextComponent
                  color={theme.white.light}
                  size={14}
                  underlined
                  weight={700}
                  onPress={() => rules.handlePressPolicyTerms()}>
                  politica de privacidade e termos
                </TextComponent>
              </TextComponent>
            </View>

            <ButtonComponent
              variant="primary"
              loading={rules.isWaiting}
              disabled={rules.isWaiting}
              onPress={rules.handleSubmit}>
              Cadastrar e entrar
            </ButtonComponent>
          </View>

          <View style={styles.alreadyHaveAccountContainer}>
            <TextComponent color={theme.white.light} size={10} weight={600}>
              Já tem uma conta?{" "}
              <TextComponent
                color={theme.white.light}
                size={10}
                weight={600}
                underlined
                onPress={() => rules.handlePressNavigateToSignIn()}>
                Faça o login aqui
              </TextComponent>
            </TextComponent>
          </View>
        </View>
      </View>
    </KeyboarAvoidingViewComponent>
  )
}
