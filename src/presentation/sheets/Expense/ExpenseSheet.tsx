import React from "react"
import { Pressable, View } from "react-native"

import { BottomSheetViewComponent } from "@/presentation/components/BottomSheet/View/BottomSheetViewComponent"
import { useExpenseSheetStyles } from "@/presentation/sheets/Expense/ExpenseSheet.styles"
import { TextComponent } from "@/presentation/components/Text/TextComponent"

import CloseLogo from "@/presentation/assets/close-logo.svg"
import { useTheme } from "@/presentation/theme/Theme"
import { DividerComponent } from "@/presentation/components/Divider/DividerComponent"
import { ButtonComponent } from "@/presentation/components/Button/ButtonComponent"
import { IExpenseSheetProps } from "@/presentation/sheets/Expense/ExpenseSheet.types"
import { useExpenseSheetRules } from "@/presentation/sheets/Expense/ExpenseSheet.rules"
import { BottomSheetInputComponent } from "@/presentation/components/BottomSheet/Input/BottomSheetInputComponent"
import { InputMoneyComponent } from "@/presentation/components/Input/Money/InputMoneyComponent"
import { InputTextAreaComponent } from "@/presentation/components/Input/TextArea/InputTextAreaComponent"
import { InputSelectComponent } from "@/presentation/components/Input/Select/InputSelectComponent"
import { useListAllExpenseTypesHook } from "@/presentation/hooks/UseListAllExpenseTypesHook"
import { InputDateComponent } from "@/presentation/components/Input/Date/InputDateComponent"

export const ExpenseSheet: React.FC<IExpenseSheetProps> = props => {
  const theme = useTheme()

  const styles = useExpenseSheetStyles()
  const rules = useExpenseSheetRules(props)

  const listAllExpensesTypes = useListAllExpenseTypesHook()

  return (
    <BottomSheetViewComponent style={styles.container}>
      <View style={styles.titleContainer}>
        <TextComponent size={18} color={theme.white.light} weight={600}>
          Insira a sua despesa
        </TextComponent>

        <Pressable onPress={props.onClose} disabled={rules.isWaiting}>
          <CloseLogo />
        </Pressable>
      </View>

      <DividerComponent
        color={theme.white.light}
        verticalSpacing={16}
        height={1}
      />

      <View style={styles.form}>
        <InputSelectComponent
          loading={listAllExpensesTypes.isWaiting}
          options={rules.expensesTypes}
          keyExtractor="key"
          labelExtractor="name"
          defaultValue={rules.values.expenseTypeId}
          onValueChange={value =>
            rules.handleSetValue("expenseTypeId", value.key)
          }
          label="Categoria"
          placeholder="Insira sua categoria"
          required
          render={BottomSheetInputComponent}
          error={!!rules.errors.expenseTypeId}
        />

        <InputTextAreaComponent
          label="Descrição"
          autoCapitalize="none"
          placeholder="Insira sua descrição"
          required
          render={BottomSheetInputComponent}
          defaultValue={rules.values.description}
          onChangeText={value => rules.handleSetValue("description", value)}
          error={!!rules.errors.description}
        />

        <InputMoneyComponent
          label="Valor gasto"
          placeholder="R$00,00"
          required
          render={BottomSheetInputComponent}
          defaultValue={rules.values.value}
          onChangeText={value => rules.handleSetValue("value", value)}
          error={!!rules.errors.value}
        />

        <InputDateComponent
          label="Data"
          required
          placeholder="Insira a data da despesa"
          error={!!rules.errors.date}
          defaultDate={rules.values.date}
          onChangeDate={date => {
            rules.handleSetValue("date", date)
          }}
        />

        <View style={styles.cta}>
          <View style={{ width: "30%" }}>
            <ButtonComponent
              variant="error"
              outlined={false}
              disabled={rules.isWaiting || rules.isWaitingDelete}
              loading={rules.isWaitingDelete}
              onPress={rules.handleDelete}>
              Deletar
            </ButtonComponent>
          </View>

          <View
            style={{ flex: 1, flexDirection: "row", gap: 8, maxWidth: "60%" }}>
            <ButtonComponent
              variant="secondary"
              fullWidth
              outlined={false}
              disabled={rules.isWaiting || rules.isWaitingDelete}
              onPress={props.onClose}>
              Cancelar
            </ButtonComponent>

            <ButtonComponent
              variant="primary"
              fullWidth
              loading={rules.isWaiting || rules.isWaitingDelete}
              disabled={rules.disableSubmit}
              onPress={rules.handleSubmit}>
              Salvar
            </ButtonComponent>
          </View>
        </View>
      </View>
    </BottomSheetViewComponent>
  )
}
