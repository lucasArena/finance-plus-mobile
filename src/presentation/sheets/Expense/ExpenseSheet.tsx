import React from "react"
import { Pressable, View } from "react-native"

import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useExpenseSheetStyles } from "@/presentation/sheets/Expense/ExpenseSheet.styles"
import { BottomSheetViewComponent } from "@/presentation/components/BottomSheet/View/BottomSheetViewComponent"

import { useTheme } from "@/presentation/theme/Theme"
import CloseLogo from "@/presentation/assets/close-logo.svg"
import { ButtonComponent } from "@/presentation/components/Button/ButtonComponent"
import { DividerComponent } from "@/presentation/components/Divider/DividerComponent"
import { IExpenseSheetProps } from "@/presentation/sheets/Expense/ExpenseSheet.types"
import { useExpenseSheetRules } from "@/presentation/sheets/Expense/ExpenseSheet.rules"
import { InputDateComponent } from "@/presentation/components/Input/Date/InputDateComponent"
import { InputMoneyComponent } from "@/presentation/components/Input/Money/InputMoneyComponent"
import { InputSelectComponent } from "@/presentation/components/Input/Select/InputSelectComponent"
import { useListAllExpenseCategoriesHook } from "@/presentation/hooks/UseListAllExpenseCategoriesHook"
import { InputTextAreaComponent } from "@/presentation/components/Input/TextArea/InputTextAreaComponent"
import { BottomSheetInputComponent } from "@/presentation/components/BottomSheet/Input/BottomSheetInputComponent"

export const ExpenseSheet: React.FC<IExpenseSheetProps> = props => {
  const theme = useTheme()

  const styles = useExpenseSheetStyles()
  const rules = useExpenseSheetRules(props)

  const listAllExpensesCategories = useListAllExpenseCategoriesHook()

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

        <InputSelectComponent
          loading={listAllExpensesCategories.isWaiting}
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

        <InputMoneyComponent
          label="Valor gasto"
          placeholder="R$00,00"
          required
          render={BottomSheetInputComponent}
          defaultValue={rules.values.value}
          onChangeText={value => rules.handleSetValue("value", value)}
          error={!!rules.errors.value}
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

        <View style={styles.cta}>
          {props.defaultValues?.key && (
            <View style={styles.ctaDeleteContainer}>
              <ButtonComponent
                variant="error"
                outlined={false}
                disabled={rules.isWaiting || rules.isWaitingDelete}
                loading={rules.isWaitingDelete}
                onPress={rules.handleDelete}>
                Deletar
              </ButtonComponent>
            </View>
          )}

          <View style={styles.ctaCommonContainer}>
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
