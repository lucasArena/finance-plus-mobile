import React from "react"

import { Text } from "react-native-paper"
import { TTextProps } from "@/presentation/components/Text/TextComponent.types"

export const TextComponent: React.FC<TTextProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>
}
