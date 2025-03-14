import { StyleSheet } from "react-native"

export const useExpenseItemComponentStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    infoContainer: {
      flex: 1,
      gap: 8,
    },
    expenseItemLine: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
}
