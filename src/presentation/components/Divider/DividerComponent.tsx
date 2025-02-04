import React from "react"

import { View } from "react-native"
import { IDividerComponentProps } from "@/presentation/components/Divider/DividerComponent.types"
import { useDividerComponentStyles } from "@/presentation/components/Divider/DividerComponent.styles"

export const DividerComponent: React.FC<IDividerComponentProps> = props => {
  const styles = useDividerComponentStyles()

  return (
    <View
      style={{
        ...styles.container,
        height: props.height,
        backgroundColor: props.color,
      }}
    />
  )
}
