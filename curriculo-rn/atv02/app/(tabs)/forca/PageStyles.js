import { StyleSheet } from "react-native";

export const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#ffffff",
  },
  main: {
    flexDirection: "column",
    gap: 32,
    alignItems: "flex-start",
  },
  ol: {
    paddingLeft: 0,
    margin: 0,
    fontSize: 14,
    lineHeight: 24,
  },
  li: {
    marginBottom: 8,
  },
  code: {
    backgroundColor: "rgba(0,0,0,0.05)",
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
    fontWeight: "600",
    fontFamily: "Courier",
  },
  ctas: {
    flexDirection: "row",
    gap: 16,
  },
  primaryButton: {
    backgroundColor: "#171717",
    color: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 128,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
    minWidth: 158,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 128,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
    gap: 24,
    marginTop: 32,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  footerLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  footerImage: {
    flexShrink: 0,
  },
});
