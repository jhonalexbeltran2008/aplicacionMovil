import { ScrollView, Text } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";
import { Styles } from "../styles/estilos";

export default function Estudios() {
  return (
    <ScrollView style={Styles.contenedor} contentContainerStyle={Styles.contenido}>
        <Text style={Styles.tituloPrincipal}>Formación Académica</Text>    
      <TarjetaEstudio
        titulo="Bachiller Académico"
        institucion="Gerardo Paredes Martinez"
        Year={2020-2025}
        enCurso={false}
      />
      <TarjetaEstudio
        titulo="Técnico Programación de Software"
        institucion="SENA"
        Year={2024-2025}
        enCurso={false}
      />
      <TarjetaEstudio
        titulo="Tecnólogo en Análisis y Desarrollo de Software"
        institucion="SENA - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"
        Year={2026}
        enCurso={true}
      />
    </ScrollView>
  );
};