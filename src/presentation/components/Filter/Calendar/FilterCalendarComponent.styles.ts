import { StyleSheet } from "react-native"

export const useFilterCalendarComponentStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textContainer: {
      alignItems: "center",
      gap: 4,
    },
  })
