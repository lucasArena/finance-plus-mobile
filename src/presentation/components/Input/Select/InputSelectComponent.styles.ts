import { StyleSheet } from "react-native"

export const useInputSelectComponentStyles = () => {
  return StyleSheet.create({
    container: {
      margin: 10,
    },
    selectButton: {
      padding: 10,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
    },
    selectButtonText: {
      fontSize: 16,
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      width: "80%",
      backgroundColor: "white",
      borderRadius: 10,
      padding: 20,
    },
    option: {
      padding: 10,
    },
    optionText: {
      fontSize: 16,
    },
    closeButton: {
      marginTop: 10,
      padding: 10,
      backgroundColor: "#007BFF",
      borderRadius: 5,
    },
    closeButtonText: {
      color: "white",
      textAlign: "center",
      fontSize: 16,
    },
  })
}
