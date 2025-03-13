import { StyleSheet } from "react-native"

export const useChartPieComponentStyles = () => {
  return StyleSheet.create({
    container: {
      gap: 20,
    },
    chartContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    legendContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: 12,
      flex: 1,
    },
    legendItem: {
      gap: 8,
      flexDirection: "row",
      alignItems: "center",
      width: "47%",
    },
    legendSquare: {
      width: 8,
      height: 8,
    },
    legendItemTextContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    },
  })
}
