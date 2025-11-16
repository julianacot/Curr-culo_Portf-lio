// GlobalStyles.js
import { StyleSheet } from "react-native";

export const colors = {
  light: {
    background: "#ffffff",
    foreground: "#171717",
  },
  dark: {
    background: "#0a0a0a",
    foreground: "#ededed",
  },
};

// Se quiser definir estilos globais reutilizáveis
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "100%",
    backgroundColor: colors.light.background,
    color: colors.light.foreground,
  },
  text: {
    color: colors.light.foreground,
    fontFamily: "Arial",
  },
});
