import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton: string;
  onPress: () => void;
};

const MiBoton = ({ textoBoton, nombreIcono, colorBoton, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[stylesBoton.boton, { backgroundColor: colorBoton }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name={nombreIcono} size={20} color="#fff" style={stylesBoton.icono} />
      <Text style={stylesBoton.texto}>{textoBoton}</Text>
    </TouchableOpacity>
  );
};

export default MiBoton;

const stylesBoton = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderRadius: 7,
    marginVertical: 5,
    elevation: 2,
  },
  icono: {
    marginRight: 5,
  },
  texto: {
    color: "#d4d6c6",
    fontSize: 14,
    fontWeight: "600",
  },
});