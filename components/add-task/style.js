import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "flex-end",
    maxHeight: 200,
    marginHorizontal: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#00796B",
    backgroundColor: "#fff",
    height: 40,
    paddingHorizontal: 10,
    color: "#212121",
    marginBottom: 20,
    marginHorizontal: "auto",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
