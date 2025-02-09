import React from "react"
import { View, TextInput, Pressable, ActivityIndicator } from "react-native"

import { IInputTextComponentProps } from "@/presentation/components/Input/Text/InputTextComponent.types"
import { useInputTextComponentStyles } from "@/presentation/components/Input/Text/InputTextComponent.styles"
import { useTheme } from "@/presentation/theme/Theme"
import { TextComponent } from "@/presentation/components/Text/TextComponent"

export const InputTextComponent: React.FC<IInputTextComponentProps> = props => {
  const theme = useTheme()
  const styles = useInputTextComponentStyles()

  const Input = (props.render as unknown as React.ElementType) ?? TextInput

  const endIcon = props.loading ? (
    <ActivityIndicator size={24} />
  ) : (
    props.endIcon
  )

  const isDisabled = props.loading || props.disabled

  return (
    <Pressable
      style={[
        styles.container,
        props.error && styles.error,
        isDisabled && styles.disabled,
        props.containerStyles,
      ]}
      onPress={props.onPress}>
      <View style={styles.labelContainer}>
        <TextComponent
          size={16}
          weight={500}
          color={props.error ? theme.error : theme.secondary.green}>
          {props.label} {props.required && "*"}
        </TextComponent>
      </View>

      <Input
        {...props}
        editable={!props.disabled}
        style={styles.input}
        placeholderTextColor={theme.tertiary.grey}
      />

      {endIcon}
    </Pressable>
  )
}
