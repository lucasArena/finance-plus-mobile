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
      justifyContent: "space-between",
      gap: 24,
    },
    ctaDeleteContainer: {
      width: "30%",
    },
    ctaCommonContainer: {
      marginLeft: "auto",
      flex: 1,
      flexDirection: "row",
      gap: 8,
      maxWidth: "60%",
    },
  })
}
