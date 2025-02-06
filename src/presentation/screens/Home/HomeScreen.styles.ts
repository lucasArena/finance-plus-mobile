import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const useHomeScreenStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.black.main,
    },
    content: {
      backgroundColor: theme.black.main,
      padding: 24,
      gap: 24,
    },
    chartContainer: {
      gap: 8,
    },
    cardContent: {
      gap: 16,
    },
    sectionTitle: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    expensesItem: {
      gap: 12,
    },
  })
}
