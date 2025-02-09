import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const useBottomSheetContainerComponentStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      zIndex: 1,
    },
    background: {
      backgroundColor: theme.black.main,
    },
  })
}
