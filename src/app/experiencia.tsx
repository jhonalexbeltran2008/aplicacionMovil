import { ScrollView, Text, View } from "react-native";
import { Styles } from "../styles/estilos";

export default function Experiencia() {
  return (
    <ScrollView style={Styles.contenedor} contentContainerStyle={Styles.contenido}>
      <Text style={Styles.tituloPrincipal}>Experiencia y Proyectos</Text>

      <View style={Styles.tarjeta}>
        <Text style={stylesExperiencia.cargo}>Desarrollador Frontend</Text>
        <Text style={stylesExperiencia.empresa}>Proyecto Revenfy(SENA)</Text>
        <Text style={stylesExperiencia.Year}>2026</Text>
        <Text style={stylesExperiencia.descripcion}>Persona encargada acerca de la Documentación y desarrollo Frontend en pocas ocaciones Backend</Text>
      </View>
    </ScrollView>
  );
}

// Estilos Experiencia 
const stylesExperiencia = {
  cargo: { fontSize: 16, fontWeight: "bold" as const, color: "#0f172a" },
  empresa: { fontSize: 14, color: "#258beb", fontWeight: "600" as const, marginVertical: 2 },
  Year: { fontSize: 12, color: "#7c838d", marginBottom: 6 },
  descripcion: { fontSize: 14, color: "#3c434d", lineHeight: 18 },
};