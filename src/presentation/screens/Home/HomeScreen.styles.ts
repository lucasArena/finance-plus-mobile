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
      padding: 16,
      paddingBottom: 100,
      gap: 24,
    },
    chartContainer: {
      gap: 8,
    },
    chartTitle: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    toggleSensitiveIcon: {
      paddingRight: 50,
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
    fabContainer: {
      position: "absolute",
      right: 20,
      bottom: 30,
      gap: 10,
    },
    fab: {
      backgroundColor: theme.white.light,
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: theme.black.main,
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 2 },
      elevation: 5,
    },
  })
}
