import React from "react"
import { View } from "react-native"

import { IInformationComponentProps } from "@/presentation/components/Information/InformationComponent.types"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useTheme } from "@/presentation/theme/Theme"
import { useInformationComponentStyles } from "@/presentation/components/Information/InformationComponent.styles"

export const InformationComponent: React.FC<
  IInformationComponentProps
> = props => {
  const theme = useTheme()

  const styles = useInformationComponentStyles()

  return (
    <View style={[styles.container, props.isWaiting && styles.noShow]}>
      {props.icon}

      <TextComponent
        size={18}
        color={theme.white.light}
        weight={500}
        style={styles.text}>
        {props.title}
      </TextComponent>

      <TextComponent
        size={14}
        color={theme.white.light}
        weight={500}
        style={styles.text}>
        {props.subtitle}
      </TextComponent>
    </View>
  )
}
