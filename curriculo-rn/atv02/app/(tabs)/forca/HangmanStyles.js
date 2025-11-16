import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "#0f3017",
  },
  forca: {
    marginVertical: 20,
  },
  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  botao: {
    width: 35,
    height: 35,
    margin: 3,
    borderRadius: 5,
    backgroundColor: "#1b4d1b",
    borderWidth: 2,
    borderColor: "#aff0a9ff",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoDesativado: {
    backgroundColor: "#555",
    borderColor: "#333",
    opacity: 0.6,
  },
  texto: {
    fontSize: 18,
    color: "#aff0a9ff",
    textAlign: "center",
    marginVertical: 5,
  },
  textoMaior: {
    fontSize: 28,
    color: "#86f08fff",
    textAlign: "center",
    marginVertical: 10,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffcc00",
    textAlign: "center",
  },
  botaoReiniciar: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: "#1b4d1b",
    borderWidth: 2,
    borderColor: "#aff0a9ff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
