import React from "react"

import { View } from "react-native"
import { useForgetPasswordScreenRules } from "@/presentation/screens/ForgetPassword/Email/ForgetPasswordEmailScreen.rules"
import { ButtonComponent } from "@/presentation/components/Button/ButtonComponent"
import { useValidateUserEmailScreenStyles } from "@/presentation/screens/ValidateUserEmail/ValidateUserEmailScreen.styles"
import { HeaderDefaultComponent } from "@/presentation/components/Header/Default/HeaderDefaultComponent"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useTheme } from "@/presentation/theme/Theme"
import { InputTextComponent } from "@/presentation/components/Input/Text/InputTextComponent"

export const ForgetPasswordEmailScreen = () => {
  const styles = useValidateUserEmailScreenStyles()
  const rules = useForgetPasswordScreenRules()
  const theme = useTheme()

  return (
    <View style={styles.container}>
      <HeaderDefaultComponent title="Esqueci minha senha" goBack />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <TextComponent size={18} color={theme.white.light} weight={700}>
            Recuperar senha
          </TextComponent>

          <TextComponent size={14} color={theme.white.light} weight={500}>
            Informe o seu nome e seu e-mail para iniciar o processo de
            recuperação de senha
          </TextComponent>
        </View>

        <InputTextComponent
          label="E-mail"
          placeholder="Digite seu e-mail"
          required
          value={rules.values.email}
          disabled={rules.isWaiting}
          autoCapitalize="none"
          onChangeText={value => rules.handleSetValue("email", value)}
          error={!!rules.errors.email}
          helperText={rules.errors.email?.message}
        />

        <View style={styles.ctaContainer}>
          <ButtonComponent
            variant="primary"
            disabled={rules.isWaiting}
            loading={rules.isWaiting}
            onPress={rules.handleSubmit}>
            Recuperar senha
          </ButtonComponent>
        </View>
      </View>
    </View>
  )
}
