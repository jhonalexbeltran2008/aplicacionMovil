import { StyleSheet, Text, View } from "react-native";

type Props = {
  titulo: string;
  institucion: string;
  Year: string;
  enCurso: boolean;
};

const TarjetaEstudio = ({ titulo, institucion, Year, enCurso }: Props) => {
  return (
    <View
      style={[estilos.tarjeta, enCurso ? estilos.enCurso : estilos.finalizado]}
    >
      <Text style={estilos.titulo}>{titulo}</Text>

      {/* Cápsula morada con texto blanco */}
      {enCurso && <Text style={estilos.badge}>En Curso</Text>}

      <Text style={estilos.subtitulo}>{institucion}</Text>
      <Text style={estilos.Year}>{Year}</Text>
    </View>
  );
};

export default TarjetaEstudio;

const estilos = StyleSheet.create({
  tarjeta: { padding: 16, borderRadius: 10, marginVertical: 8, borderWidth: 1 },
  finalizado: { backgroundColor: "#ffffff", borderColor: "#ccc" },
  enCurso: { backgroundColor: "#eef2ff", borderColor: "#7c3aed" },
  titulo: { fontSize: 16, fontWeight: "bold" },
  subtitulo: { fontSize: 14, color: "#555" },
  Year: { fontSize: 12, color: "#888" },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#7c3aed",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 999,
    overflow: "hidden",
    marginVertical: 4,
  },
});