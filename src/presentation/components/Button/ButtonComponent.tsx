import React from "react"
import { ActivityIndicator, TouchableOpacity, View } from "react-native"

import { IButtonProps } from "@/presentation/components/Button/ButtonComponent.types"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useButtonComponentRules } from "@/presentation/components/Button/ButtonComponent.rules"
import { useButtonComponentStyles } from "@/presentation/components/Button/ButtonComponent.styles"

export const ButtonComponent: React.FC<IButtonProps> = ({
  fullWidth,
  outlined = true,
  ...props
}) => {
  const rules = useButtonComponentRules(props)
  const styles = useButtonComponentStyles()

  const safeIcon = props.loading ? (
    <ActivityIndicator size={12} />
  ) : (
    props.startIcon
  )

  return (
    <TouchableOpacity
      {...props}
      style={[
        fullWidth && styles.fullWidth,
        props.disabled && styles.disabled,
        outlined && styles.outlined,
        rules.variantStyles,
      ]}>
      <View style={styles.contentContainer}>
        {safeIcon}

        <TextComponent color={rules.variantTextColor} size={12} weight={500}>
          {props.children}
        </TextComponent>
      </View>
    </TouchableOpacity>
  )
}
