import React from "react"

import { Pressable, View } from "react-native"

import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useTheme } from "@/presentation/theme/Theme"
import { useFilterCalendarComponentStyles } from "@/presentation/components/Filter/Calendar/FilterCalendarComponent.styles"

import ArrowLeftCircleLogo from "@/presentation/assets/arrow-left-circle-logo.svg"
import ArrowRightCircleLogo from "@/presentation/assets/arrow-right-circle-logo.svg"
import { IFilterCalendarComponentProps } from "@/presentation/components/Filter/Calendar/FilterCalendarComponent.types"
import { useFilterCalendarComponentRules } from "@/presentation/components/Filter/Calendar/FilterCalendarComponent.rules"

export const FilterCalendarComponent: React.FC<
  IFilterCalendarComponentProps
> = props => {
  const theme = useTheme()

  const styles = useFilterCalendarComponentStyles()
  const rules = useFilterCalendarComponentRules(props)

  return (
    <View style={styles.container}>
      <Pressable onPress={() => rules.handleGoBack()} disabled={props.disabled}>
        <ArrowLeftCircleLogo />
      </Pressable>

      <View style={styles.textContainer}>
        <TextComponent size={16} color={theme.white.light} weight={600}>
          {rules.monthLabel}
        </TextComponent>
        <TextComponent size={12} color={theme.white.light} weight={600}>
          {rules.yearLabel}
        </TextComponent>
      </View>

      <Pressable
        onPress={() => rules.handleGoForward()}
        disabled={props.disabled}>
        <ArrowRightCircleLogo />
      </Pressable>
    </View>
  )
}
