import { StyleSheet } from "react-native";

export const colores = {
  fondoGeneral: "#f8fafc",
  blanco: "#ffffff",
  textoPrincipal: "#0f172a",
  textoSecundario: "#475569",
  grisClaro: "#94a3b8",
  azulPrimario: "#2563eb",
  azulClaro: "#eef2ff",
  borde: "#e2e8f0",
  // Botones de contacto
  amarillo: "#eab308",
  azulBoton: "#5b7fe8",
  rojo: "#ef6f63",
  azulFacebook: "#0b4fc4",
};

export const Styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondoGeneral,
  },
  contenido: {
    padding: 16,
    alignItems: "stretch",
  },
  tituloPrincipal: {
    fontSize: 15,
    fontWeight: "bold",
    color: colores.textoPrincipal,
    marginBottom: 8,
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 1,
    borderWidth: 1,
    borderColor: colores.borde,
  },
});