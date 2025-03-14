import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const usePolicyAndTermsScreenStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.black.main,
      gap: 16,
    },
  })
}
