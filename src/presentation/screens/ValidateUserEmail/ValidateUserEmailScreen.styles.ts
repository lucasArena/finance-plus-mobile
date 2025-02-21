import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const useValidateUserEmailScreenStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.black.main,
    },
    titleContainer: {
      gap: 8,
    },
    content: {
      paddingVertical: 24,
      paddingHorizontal: 16,
      gap: 24,
    },
    ctaContainer: {
      gap: 8,
    },
  })
}
