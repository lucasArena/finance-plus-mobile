import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const useSignUpScreenStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary.blue,
      justifyContent: "flex-end",
    },
    content: {
      paddingHorizontal: 24,
      paddingVertical: 32,
      backgroundColor: theme.black.main,
      gap: 21,
      height: "85%",
    },
    formContainer: {
      gap: 16,
    },
    alreadyHaveAccountContainer: {
      alignItems: "center",
    },
  })
}
