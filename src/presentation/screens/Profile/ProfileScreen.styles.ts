import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const useProfileScreenStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.black.main,
    },
    headerContainer: {
      backgroundColor: theme.primary.blue,
      padding: 24,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    content: {
      paddingHorizontal: 24,
      paddingVertical: 15,
    },
    card: {
      backgroundColor: theme.tertiary.linear,
      borderRadius: 30,
      padding: 26,
      gap: 32,
    },
    profileInfo: {
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    optionItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
}
