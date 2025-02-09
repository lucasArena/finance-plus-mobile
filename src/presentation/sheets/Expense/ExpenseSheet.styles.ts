import { StyleSheet } from "react-native"

export const useExpenseSheetStyles = () => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 24,
      paddingVertical: 32,
    },
    titleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    form: {
      gap: 16,
    },
    cta: {
      flexDirection: "row",
      gap: 24,
    },
  })
}
