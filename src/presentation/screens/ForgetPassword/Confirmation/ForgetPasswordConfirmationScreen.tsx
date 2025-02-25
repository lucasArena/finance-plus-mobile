import React from "react"

import { View } from "react-native"
import { ButtonComponent } from "@/presentation/components/Button/ButtonComponent"
import { useValidateUserEmailScreenStyles } from "@/presentation/screens/ValidateUserEmail/ValidateUserEmailScreen.styles"
import { HeaderDefaultComponent } from "@/presentation/components/Header/Default/HeaderDefaultComponent"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useTheme } from "@/presentation/theme/Theme"
import { InputTextComponent } from "@/presentation/components/Input/Text/InputTextComponent"
import { useForgetPasswordConfirmationScreenRules } from "@/presentation/screens/ForgetPassword/Confirmation/ForgetPasswordConfirmationScreen.rules"

export const ForgetPasswordConfirmationScreen: React.FC = () => {
  const styles = useValidateUserEmailScreenStyles()
  const rules = useForgetPasswordConfirmationScreenRules()
  const theme = useTheme()

  return (
    <View style={styles.container}>
      <HeaderDefaultComponent title="Esqueci minha senha" goBack />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <TextComponent size={18} color={theme.white.light} weight={700}>
            Código validado!
          </TextComponent>

          <TextComponent size={14} color={theme.white.light} weight={500}>
            Agora vamos criar sua nova senha
          </TextComponent>
        </View>

        <InputTextComponent
          label="Nova senha"
          placeholder="Digite a nova senha"
          required
          secureTextEntry
          value={rules.values.password}
          disabled={rules.isWaiting}
          autoCapitalize="none"
          onChangeText={value => rules.handleSetValue("password", value)}
          error={!!rules.errors.email}
          helperText={rules.errors.email?.message}
        />

        <InputTextComponent
          label="Repita a nova senha"
          placeholder="Digite a nova senha novamente"
          required
          secureTextEntry
          value={rules.values.passwordConfirmation}
          disabled={rules.isWaiting}
          autoCapitalize="none"
          onChangeText={value =>
            rules.handleSetValue("passwordConfirmation", value)
          }
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
