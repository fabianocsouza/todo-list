import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: "#262626",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: 280,
    color: "#F2F2F2",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    marginLeft: 15,
  },
  textCheck: {
    width: 280,
    color: "#F2F2F2",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    marginLeft: 15,
    textDecorationLine: "line-through",
    opacity: 0.5,
  },
});
