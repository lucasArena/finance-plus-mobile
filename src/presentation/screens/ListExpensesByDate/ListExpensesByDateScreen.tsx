/* eslint-disable react/no-unstable-nested-components */
import React from "react"
import { SectionList, View } from "react-native"

import { HeaderDefaultComponent } from "@/presentation/components/Header/Default/HeaderDefaultComponent"
import { useListExpensesByDateStyles } from "@/presentation/screens/ListExpensesByDate/ListExpensesByDateScreen.styles"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useTheme } from "@/presentation/theme/Theme"
import { DividerComponent } from "@/presentation/components/Divider/DividerComponent"
import { ExpenseItemComponent } from "@/presentation/components/Expense/Item/ExpenseItemComponent"
import { FilterCalendarComponent } from "@/presentation/components/Filter/Calendar/FilterCalendarComponent"
import { useListExpensesByDateRules } from "@/presentation/screens/ListExpensesByDate/ListExpenseByDateScreen.rules"
import { ActivityIndicatorComponent } from "@/presentation/components/ActitityIndicator/ActivityIndicatorComponent"
import { InformationComponent } from "@/presentation/components/Information/InformationComponent"

import CheckCircleLogo from "@/presentation/assets/check-circle-logo.svg"
import ExclamationCircleLogo from "@/presentation/assets/exclamation-circle-logo.svg"
import { IListExpensesByDateScreenProps } from "@/presentation/screens/ListExpensesByDate/ListExpensesByDateScreen.types"
import { BottomSheetContainerComponent } from "@/presentation/components/BottomSheet/Container/BottomSheetContainerComponent"
import { ExpenseSheet } from "@/presentation/sheets/Expense/ExpenseSheet"

export const ListExpensesByDateScreen: React.FC<
  IListExpensesByDateScreenProps
> = () => {
  const theme = useTheme()

  const styles = useListExpensesByDateStyles()
  const rules = useListExpensesByDateRules()

  const emptySections = rules.sections.length === 0

  return (
    <View style={styles.container}>
      <HeaderDefaultComponent title="Lista de gastos" goBack />

      {!rules.error ? (
        <SectionList
          style={styles.container}
          contentContainerStyle={styles.content}
          sections={rules.sections}
          stickySectionHeadersEnabled={false}
          keyExtractor={(item, index) => `${index}-${item.key}`}
          ListEmptyComponent={
            <InformationComponent
              icon={<CheckCircleLogo width={60} height={60} />}
              title="Não existe despesas neste mês"
              subtitle="Cadastre despesas para visualizar aqui"
              isWaiting={rules.isWaiting}
            />
          }
          ListHeaderComponent={() => (
            <View style={styles.filterContainer}>
              <FilterCalendarComponent
                initialDate={rules.date}
                onChangeDate={rules.handleChangeDate}
              />
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <>
              <TextComponent color={theme.white.light} size={16} weight={500}>
                {section.title}
              </TextComponent>

              <DividerComponent
                height={1}
                color={theme.white.light}
                topSpacing={16}
              />
            </>
          )}
          renderItem={({ item, index }) => (
            <ExpenseItemComponent
              key={index}
              description={item.description}
              value={item.value}
              typeName={item.type.name}
              onPress={() => rules.handleEdit(item)}
            />
          )}
          ItemSeparatorComponent={() => (
            <DividerComponent
              height={0}
              color={theme.white.light}
              verticalSpacing={6}
            />
          )}
          SectionSeparatorComponent={() => (
            <DividerComponent
              height={0}
              color={theme.white.light}
              bottomSpacing={16}
            />
          )}
          ListFooterComponent={() => (
            <ActivityIndicatorComponent
              size={24}
              isWaiting={rules.isWaiting && !emptySections}
            />
          )}
          onEndReached={() => {
            if (!rules.isWaiting) {
              rules.handleNextPage()
            }
          }}
          onEndReachedThreshold={0.3}
        />
      ) : (
        <InformationComponent
          icon={<ExclamationCircleLogo width={60} height={60} />}
          title={`Ops! \nFalha ao carregar os dados`}
          subtitle="Reinicie o aplicativo e tente novamente"
        />
      )}

      <BottomSheetContainerComponent
        ref={rules.expenseSheetRef}
        SheetComponent={ExpenseSheet}
      />
    </View>
  )
}
