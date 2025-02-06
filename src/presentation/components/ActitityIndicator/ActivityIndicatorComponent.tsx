import React from "react"

import { ActivityIndicator, View } from "react-native"
import { IActivityIndicatorComponentProps } from "@/presentation/components/ActitityIndicator/ActivityIndicatorComponent.types"
import { useActivityIndicatorComponentStyles } from "@/presentation/components/ActitityIndicator/ActivityIndicatorComponent.styles"

export const ActivityIndicatorComponent: React.FC<
  IActivityIndicatorComponentProps
> = props => {
  const styles = useActivityIndicatorComponentStyles()

  return (
    <View style={[styles.default, props.isWaiting && styles.show]}>
      <ActivityIndicator size={24} />
    </View>
  )
}
