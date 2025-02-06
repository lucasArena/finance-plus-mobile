import React from "react"
import { Pressable, ScrollView, View } from "react-native"

import { useHomeScreenStyles } from "@/presentation/screens/Home/HomeScreen.styles"

import { AvatarComponent } from "@/presentation/components/Avatar/AvatarComponent"
import { HeaderDefaultComponent } from "@/presentation/components/Header/Default/HeaderDefaultComponent"
import { useRoutes } from "@/presentation/routes"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useTheme } from "@/presentation/theme/Theme"

import { CardComponent } from "@/presentation/components/Card/CardComponent"
import { DividerComponent } from "@/presentation/components/Divider/DividerComponent"
import { ExpenseItemComponent } from "@/presentation/components/Expense/Item/ExpenseItemComponent"
import { FilterCalendarComponent } from "@/presentation/components/Filter/Calendar/FilterCalendarComponent"
import { useHomeScreenRules } from "@/presentation/screens/Home/HomeScreen.rules"
import { ChartPieComponent } from "@/presentation/components/Chart/Pie/ChartPieComponent"
import { useAuth } from "@/presentation/providers/Auth/AuthProvider"

export const HomeScreen: React.FC = () => {
  const theme = useTheme()
  const navigation = useRoutes()
  const auth = useAuth()

  const rules = useHomeScreenRules()
  const styles = useHomeScreenStyles()

  return (
    <View style={styles.container}>
      <HeaderDefaultComponent
        title={`Olá, ${auth.tokenDecrypted?.name.split(" ")[0]}`}
        right={
          <Pressable onPress={() => navigation.handleNavigate("Profile")}>
            <AvatarComponent size={40} name="Lucas Arena" />
          </Pressable>
        }
      />

      <ScrollView contentContainerStyle={styles.content}>
        <FilterCalendarComponent
          initialDate={rules.date}
          onChangeDate={rules.handleChangeDate}
        />

        <View style={styles.chartContainer}>
          <TextComponent size={18} color={theme.white.light} weight={700}>
            Gastos do mês
          </TextComponent>

          <CardComponent>
            <ChartPieComponent data={rules.expensesGrouped} />
          </CardComponent>
        </View>

        {!!rules.expenses.length && (
          <CardComponent>
            <View style={styles.cardContent}>
              {rules.expenses.map((sections, sectionIndex) => (
                <View key={`${sectionIndex}-${sections.title}`}>
                  <View>
                    <View style={styles.sectionTitle}>
                      <TextComponent
                        color={theme.white.light}
                        size={16}
                        weight={500}>
                        {sections.title}
                      </TextComponent>

                      {rules.isShowMoreExpensesButtonVisable &&
                        sectionIndex === 0 && (
                          <Pressable
                            onPress={() =>
                              navigation.handleNavigate("ListExpensesByDate", {
                                initialDate: rules.date,
                              })
                            }>
                            <TextComponent
                              color={theme.secondary.green}
                              size={12}
                              weight={400}>
                              Ver tudo
                            </TextComponent>
                          </Pressable>
                        )}
                    </View>

                    <DividerComponent
                      height={1}
                      color={theme.white.light}
                      verticalSpacing={16}
                    />
                  </View>

                  <View style={styles.expensesItem}>
                    {sections.data.map((expense, expenseIndex) => (
                      <ExpenseItemComponent
                        key={`expense-item-${expenseIndex}-${expense.key}`}
                        description={expense.description}
                        value={expense.value}
                        typeName={expense.type.name}
                      />
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </CardComponent>
        )}
      </ScrollView>
    </View>
  )
}
