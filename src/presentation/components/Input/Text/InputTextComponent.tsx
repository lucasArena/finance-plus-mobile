import React from "react"
import { View, TextInput } from "react-native"

import { IInputTextComponentProps } from "@/presentation/components/Input/Text/InputTextComponent.types"
import { useInputTextComponentStyles } from "@/presentation/components/Input/Text/InputTextComponent.styles"
import { useTheme } from "@/presentation/theme/Theme"
import { TextComponent } from "@/presentation/components/Text/TextComponent"

export const InputTextComponent: React.FC<IInputTextComponentProps> = props => {
  const theme = useTheme()
  const styles = useInputTextComponentStyles()

  return (
    <View
      style={[
        styles.container,
        props.error && styles.error,
        props.disabled && styles.disabled,
      ]}>
      <View style={styles.labelContainer}>
        <TextComponent
          size={16}
          weight={500}
          color={props.error ? theme.error : theme.secondary.green}>
          {props.label} {props.required && "*"}
        </TextComponent>
      </View>

      <TextInput
        {...props}
        editable={!props.disabled}
        style={styles.input}
        placeholderTextColor={theme.tertiary.grey}
      />

      {props.endIcon}
    </View>
  )
}
