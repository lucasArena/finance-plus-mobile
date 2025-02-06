import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const useListExpensesByDateStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.black.main,
    },
    content: {
      paddingVertical: 15,
      paddingHorizontal: 24,
    },
    expensesContainer: {
      gap: 12,
    },
    filterContainer: {
      marginBottom: 16,
    },
  })
}
