import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components/MiBoton";
import { Styles, colores } from "../styles/estilos";

// Colores de cada botón de contacto
const coloresBoton = {
  correo: colores.amarillo,
  llamar: colores.azulBoton,
  linkedin: colores.rojo,
  github: "#334155",
  facebook: colores.azulFacebook,
  instagram: colores.rojo,
  estudios: colores.rojo,
};

export default function Inicio() {
  const router = useRouter();

  return (
    <ScrollView style={Styles.contenedor} contentContainerStyle={Styles.contenido}>
      {/* Encabezado de perfil */}
      <View style={stylesInicio.perfil}>
        <Ionicons name="person-circle" size={110} color="#2563eb" />
        <Text style={stylesInicio.nombre}>Jhon Alex Beltran Herrera</Text>
        <Text style={stylesInicio.titulacion}>Tecnólogo en Análisis y Desarrollo de Software</Text>
      </View>

      {/* Tarjeta: Perfil profesional */}
      <View style={Styles.tarjeta}>
        <Text style={stylesInicio.encabezado}>Perfil Profesional</Text>
        <Text style={stylesInicio.perfilTexto}>
          Aprendiz del SENA en formación como Tecnólogo en Análisis y Desarrollo
          de Software. Participo en el proyecto Revenfy encargándome de la
          documentación y del desarrollo Frontend.
        </Text>
      </View>

      {/* Tarjeta: Contacto */}
      <View style={Styles.tarjeta}>
        <Text style={stylesInicio.encabezado}>Contacto</Text>

        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail-outline"
          colorBoton={coloresBoton.correo}
          onPress={() => Alert.alert("Correo", "jhonalexbeltran2008@gmail.com")}
        />

        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call-outline"
          colorBoton={coloresBoton.llamar}
          onPress={() => Alert.alert("Teléfono", "+57 300 000 0000")}
        />

        <MiBoton
          textoBoton="Ver Perfil LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton={coloresBoton.linkedin}
          onPress={() =>
            Alert.alert("LinkedIn", "www.linkedin.com/in/jhon-beltran16")
          }
        />

        <MiBoton
          textoBoton="Mis proyectos Git"
          nombreIcono="logo-github"
          colorBoton={coloresBoton.github}
          onPress={() => Alert.alert("Repositorio", "https://github.com/jhonalexbeltran2008")}
        />

        <MiBoton
          textoBoton="Facebook"
          nombreIcono="logo-facebook"
          colorBoton={coloresBoton.facebook}
          onPress={() => Alert.alert("Facebook", "https://www.facebook.com/Jhonnalexx14")}
        />

        <MiBoton
          textoBoton="Instagram"
          nombreIcono="logo-instagram"
          colorBoton={coloresBoton.instagram}
          onPress={() => Alert.alert("Instagram", "https://www.instagram.com/arsenal")}
        />

        {/* Navega a la pantalla de estudios */}
        <MiBoton
          textoBoton="Estudios"
          nombreIcono="school-outline"
          colorBoton={coloresBoton.estudios}
          onPress={() => router.push("/estudios")}
        />
      </View>
    </ScrollView>
  );
}

const stylesInicio = StyleSheet.create({
  perfil: {
    alignItems: "center",
    marginBottom: 20,
  },
  nombre: {
    color: "#0f172a",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
  titulacion: {
    color: "#2563eb",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center",
  },
  encabezado: {
    color: "#0f172a",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 8,
  },
  perfilTexto: {
    color: "#475569",
    fontSize: 13,
    lineHeight: 20,
  },
});