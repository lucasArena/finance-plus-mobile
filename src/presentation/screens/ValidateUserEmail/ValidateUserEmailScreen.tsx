import React from "react"

import { View } from "react-native"
import { useValidateUserEmailScreenRules } from "./ValidateUserEmailScreen.rules"
import { ButtonComponent } from "@/presentation/components/Button/ButtonComponent"
import { useValidateUserEmailScreenStyles } from "@/presentation/screens/ValidateUserEmail/ValidateUserEmailScreen.styles"
import { HeaderDefaultComponent } from "@/presentation/components/Header/Default/HeaderDefaultComponent"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useTheme } from "@/presentation/theme/Theme"
import { InputCodeComponent } from "@/presentation/components/Input/Code/InputCodeComponent"

export const ValidateUserEmailScreen = () => {
  const styles = useValidateUserEmailScreenStyles()
  const rules = useValidateUserEmailScreenRules()
  const theme = useTheme()

  const isDisabled = rules.isWaitingResend || rules.isWaitingValidate

  return (
    <View style={styles.container}>
      <HeaderDefaultComponent title="Validação de e-mail" goBack />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <TextComponent size={18} color={theme.white.light} weight={700}>
            Validar e-mail
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
            variant="primary"
            disabled={isDisabled}
            loading={rules.isWaitingValidate}
            onPress={() => rules.handleValidateCode()}>
            Validar código
          </ButtonComponent>

          <ButtonComponent
            outlined={false}
            variant="secondary"
            disabled={isDisabled}
            loading={rules.isWaitingResend}
            onPress={() => rules.handleReSendCode()}>
            Reenviar código
          </ButtonComponent>
        </View>
      </View>
    </View>
  )
}
