import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const useHeaderDefaultComponentStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    topBar: {
      flex: 0,
      backgroundColor: theme.primary.blue,
    },
    container: {
      flex: 1,
      backgroundColor: theme.black.main,
    },
    headerContainer: {
      backgroundColor: theme.primary.blue,
      paddingHorizontal: 24,
      paddingVertical: 12,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerLeftContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
    },
  })
}
