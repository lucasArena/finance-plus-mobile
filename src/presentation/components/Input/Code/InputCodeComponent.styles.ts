import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const useInputCodeComponentStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      gap: 16,
    },
    codeContainer: {
      flexDirection: "row",
      gap: 10,
    },
    inputContainer: {
      borderColor: theme.white.light,
      borderWidth: 1,
      flex: 1,
      borderRadius: 24,
      minHeight: 48,
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      color: theme.white.light,
      width: "100%",
    },
  })
}
