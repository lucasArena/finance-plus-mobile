import { StyleSheet } from "react-native"

export const useExpenseItemComponentStyles = () => {
  return StyleSheet.create({
    expensesItemsContainer: {
      gap: 16,
    },
    expenseItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    expenseItemDetails: {
      flexDirection: "row",
      gap: 18,
      alignItems: "center",
    },
    expenseItemTextContainer: {
      gap: 8,
      width: "60%",
    },
  })
}
