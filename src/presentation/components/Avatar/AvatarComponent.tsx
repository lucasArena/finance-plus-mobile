import React from "react"

import { Image, View } from "react-native"
import { IAvatarComponentProps } from "@/presentation/components/Avatar/AvatarComponent.types"
import { useAvatarComponentStyles } from "@/presentation/components/Avatar/AvatarComponent.styles"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useTheme } from "@/presentation/theme/Theme"

export const AvatarComponent: React.FC<IAvatarComponentProps> = props => {
  const styles = useAvatarComponentStyles()
  const theme = useTheme()

  return (
    <View style={styles.container}>
      {props.url ? (
        <Image
          src={props.url}
          style={{ width: props.size, height: props.size }}
        />
      ) : (
        <View
          style={[styles.noAvatar, { width: props.size, height: props.size }]}>
          <TextComponent
            size={props.size * 0.4}
            color={theme.white.light}
            weight={600}>
            {props.name?.toUpperCase().charAt(0)}
          </TextComponent>
        </View>
      )}
    </View>
  )
}
44 - 18
