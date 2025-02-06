import React from "react"
import { View } from "react-native"

import { useCardComponentStyles } from "@/presentation/components/Card/CardComponent.styles"
import { ICardComponentProps } from "@/presentation/components/Card/CardComponent.types"

export const CardComponent: React.FC<
  React.PropsWithChildren<ICardComponentProps>
> = props => {
  const styles = useCardComponentStyles()

  return <View style={styles.container}>{props.children}</View>
}
