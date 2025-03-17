import React from "react"
import { View } from "react-native"
import { TextComponent } from "../Text/TextComponent"
import { useMoneyHideComponentStyles } from "@/presentation/components/Money/MoneyHideComponent.styles"
import { IMoneyHideComponentProps } from "@/presentation/components/Money/MoneyHideComponent.types"

export const MoneyHideComponent: React.FC<IMoneyHideComponentProps> = props => {
  const styles = useMoneyHideComponentStyles()

  return (
    <View style={styles.container}>
      <TextComponent
        size={props.size}
        color={props.color}
        weight={props.weight}>
        R$
      </TextComponent>

      {[...new Array(props.length).keys()].map(index => (
        <View
          key={`hide-money-${index}`}
          style={[styles.ball, { backgroundColor: props.color }]}
        />
      ))}
    </View>
  )
}
