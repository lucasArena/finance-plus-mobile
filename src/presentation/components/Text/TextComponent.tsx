import React from "react"

import { Text } from "react-native"

import { ITextProps } from "@/presentation/components/Text/TextComponent.types"
import { useTextComponentStyles } from "@/presentation/components/Text/TextComponent.styles"

export const TextComponent: React.FC<ITextProps> = ({
  children,
  size,
  color,
  weight,
  underlined,
  style,
  width,
  ...props
}) => {
  const styles = useTextComponentStyles()

  return (
    <Text
      {...props}
      style={[
        style,
        underlined && styles.underlined,
        { fontSize: size, color, fontWeight: weight, width },
      ]}>
      {children}
    </Text>
  )
}
