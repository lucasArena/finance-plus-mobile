import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const useInputDateComponentStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      width: "80%",
      backgroundColor: theme.black.main,
      borderRadius: 10,
      padding: 20,
      gap: 16,
    },
    modalCTA: {
      flexDirection: "row",
      gap: 16,
    },
  })
}
