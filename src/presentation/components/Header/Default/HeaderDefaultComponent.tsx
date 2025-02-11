import { useTheme } from "@/presentation/theme/Theme"
import React from "react"

import { Pressable, SafeAreaView, StatusBar, View } from "react-native"
import { useHeaderDefaultComponentStyles } from "@/presentation/components/Header/Default/HeaderDefaultComponent.styles"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { IHeaderDefaultComponentProps } from "@/presentation/components/Header/Default/HeaderDefaultComponent.types"

import ArrowLeftLogo from "@/presentation/assets/arrow-left-logo.svg"
import { useRoutes } from "@/presentation/routes"

export const HeaderDefaultComponent: React.FC<
  IHeaderDefaultComponentProps
> = props => {
  const theme = useTheme()
  const navigation = useRoutes()

  const styles = useHeaderDefaultComponentStyles()

  return (
    <React.Fragment>
      <StatusBar backgroundColor={theme.primary.blue} />
      <SafeAreaView style={styles.topBar} />

      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          {props.goBack && (
            <Pressable onPress={() => navigation.handleGoBack()}>
              <ArrowLeftLogo />
            </Pressable>
          )}

          <TextComponent color={theme.white.light} size={24} weight={700}>
            {props.title}
          </TextComponent>
        </View>

        {props.right}
      </View>
    </React.Fragment>
  )
}
