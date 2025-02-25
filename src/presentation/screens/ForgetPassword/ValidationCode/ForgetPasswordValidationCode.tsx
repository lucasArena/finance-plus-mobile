import React from "react"

import { View } from "react-native"
import { ButtonComponent } from "@/presentation/components/Button/ButtonComponent"
import { useValidateUserEmailScreenStyles } from "@/presentation/screens/ValidateUserEmail/ValidateUserEmailScreen.styles"
import { HeaderDefaultComponent } from "@/presentation/components/Header/Default/HeaderDefaultComponent"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useTheme } from "@/presentation/theme/Theme"
import { InputCodeComponent } from "@/presentation/components/Input/Code/InputCodeComponent"
import { useForgetPasswordValidationCodeRules } from "@/presentation/screens/ForgetPassword/ValidationCode/ForgetPasswordValidationCode.rules"

export const ForgetPasswordValidationCodeScreen = () => {
  const theme = useTheme()

  const rules = useForgetPasswordValidationCodeRules()
  const styles = useValidateUserEmailScreenStyles()

  const generalDisabled = rules.isWaitingResend || rules.isWaitingValidate

  return (
    <View style={styles.container}>
      <HeaderDefaultComponent title="Esqueci minha senha" goBack />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <TextComponent size={18} color={theme.white.light} weight={700}>
            Recuperar senha
          </TextComponent>

          <TextComponent size={14} color={theme.white.light} weight={500}>
            Por favor, digite o código de segurança que enviamos para seu
            e-mail.
          </TextComponent>
        </View>

        <InputCodeComponent
          label="Código"
          length={5}
          onChangeText={code => rules.setCode(code)}
        />

        <View style={styles.ctaContainer}>
          <ButtonComponent
            disabled={generalDisabled}
            loading={rules.isWaitingValidate}
            variant="primary"
            onPress={() => rules.handleValidateCode()}>
            Validar código
          </ButtonComponent>

          <ButtonComponent
            outlined={false}
            disabled={generalDisabled}
            loading={rules.isWaitingResend}
            variant="secondary"
            onPress={() => rules.handleReSendCode()}>
            Reenviar código
          </ButtonComponent>
        </View>
      </View>
    </View>
  )
}
