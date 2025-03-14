import React from "react"
import { Pressable, View } from "react-native"
import { AvatarComponent } from "@/presentation/components/Avatar/AvatarComponent"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useTheme } from "@/presentation/theme/Theme"
import { useExpenseItemComponentStyles } from "@/presentation/components/Expense/Item/ExpenseItemComponent.styles"
import { IExpenseItemComponentProps } from "@/presentation/components/Expense/Item/ExpenseItemComponent.types"

export const ExpenseItemComponent: React.FC<
  IExpenseItemComponentProps
> = props => {
  const theme = useTheme()

  const styles = useExpenseItemComponentStyles()

  return (
    <Pressable onPress={() => props.onPress?.()}>
      <View style={styles.container}>
        <AvatarComponent size={44} name={props.typeName} />

        <View style={styles.infoContainer}>
          <View style={styles.expenseItemLine}>
            <TextComponent
              width="60%"
              color={theme.white.light}
              size={14}
              weight={400}>
              {props.description ? props.description : props.typeName}
            </TextComponent>

            <TextComponent color={theme.error} size={14} weight={400}>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(props.value)}
            </TextComponent>
          </View>

          <View style={styles.expenseItemLine}>
            <TextComponent color={theme.white.light} size={10} weight={500}>
              Detalhe do gasto
            </TextComponent>

            <TextComponent color={theme.white.light} size={10} weight={400}>
              {props.typeName}
            </TextComponent>
          </View>
        </View>
      </View>
    </Pressable>
  )
}
