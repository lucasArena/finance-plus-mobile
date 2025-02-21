import React from "react"

import { IToastComponentProps } from "@/presentation/components/Toast/ToastComponent.types"
import { View } from "react-native"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useToastComponentStyles } from "@/presentation/components/Toast/ToastComponent.styles"

import CheckLogo from "@/presentation/assets/check-logo.svg"
import ErrorLogo from "@/presentation/assets/error-circle-logo.svg"
import { useTheme } from "@/presentation/theme/Theme"

export const ToastComponent: React.FC<IToastComponentProps> = props => {
  const theme = useTheme()

  const styles = useToastComponentStyles()

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        {props.type === "success" ? <CheckLogo /> : <ErrorLogo />}
      </View>

      <TextComponent size={12} color={theme.black.main} weight={400}>
        {props.title}
      </TextComponent>
    </View>
  )
}
