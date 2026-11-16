import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Styles } from "../styles/estilos";

interface Hobby {
  id: string;
  nombre: string;
  detalle: string;
  imagen: { uri: string };
}

export default function Hobbies() {

    // Cual tarjeta está expandida mediante su ID

  const [idExpandido, setIdExpandido] = useState<string | null>(null);

  const Hobbies: Hobby[] = [
    { 
      id: "1", 
      nombre: "Documentales", 
      detalle: "Me encanta pasar tiempo mirando documentales sobre sucesos historios que ocurrieron, I y II Guerra mundial, Guerra fria, Avance técnologico, etc ...",
      imagen: { uri: "https://content-historia.nationalgeographic.com.es/medio/2018/02/28/paracaidistas-aliados-con-una-bandera-nazi__1280x1046.jpg" } 
    },
    { 
      id: "2", 
      nombre: "Fútbol", 
      detalle: "Ver y Jugar fútbol es una de las cosas que mas me llenan",
      imagen: { uri: "https://i.guim.co.uk/img/media/758103c5dae7de3f2ea455aceb23c1d1d1aaac4e/0_186_2048_1229/master/2048.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c75d5f93db463eb625ea110ae8f15277" }
    },
    { 
      id: "3", 
      nombre: "Dormir", 
      detalle: "Aunque algunas ocasiones tenga etapas de insomnio, el placer de un sueño de calidad y tranquilo es riqueza aunque no lo parezca",
      imagen: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBqG7YFnwO4rKh9dCVfFOfmsfBszFueeVR2h0mY0Tig&s=10" }
    },
    { 
      id: "4", 
      nombre: "Moda", 
      detalle: "Me apasiona el verse bien y estar constantemente revisando alguna prenda o accesorio que me guste, lo mas chistoso es que antes de comprar ya me imagino con que lo voy a combinar",
      imagen: { uri: "https://nikeco.vtexassets.com/arquivos/ids/932975-800-auto?v=639008920771970000&width=800&height=auto&aspect=true" }
    },
    { 
      id: "5", 
      nombre: "Videojuegos", 
      detalle: "Sin duda alguno es un hobby que aprecio mucho, aunque no me gusten todos los juegos, los que me encantan los mantengo jugando por horas, mi juego favorito es Left 4 Dead 2 (L4D2) y sus protagonistas",
      imagen: { uri: "https://static.wikia.nocookie.net/left4dead/images/1/18/Left-4-dead-2-dead-center.jpg/revision/latest?cb=20121206152143&path-prefix=es" }
    },
  ];    
    const manejarPress = (id: string) => {
    // Si ya está abierto lo cerramos (null), de lo contrario abrimos el seleccionado
    setIdExpandido(idExpandido === id ? null : id);
  };

  return (
    <ScrollView style={Styles.contenedor} contentContainerStyle={Styles.contenido}>
      <Text style={Styles.tituloPrincipal}>Intereses y Hobbies</Text>
      {Hobbies.map((hobby) => {
        const estaAbierto = idExpandido === hobby.id;

        return (
          <TouchableOpacity
            key={hobby.id}
            style={[Styles.tarjeta, stylesHobbies.tarjetaHobby]}
            onPress={() => manejarPress(hobby.id)}
            activeOpacity={0.8}
          >
            {/* Imagen cargada desde internet */}

            <Image source={hobby.imagen} style={stylesHobbies.imagenHobby} />
            
            <View style={stylesHobbies.textoContainer}>
              <Text style={stylesHobbies.textoHobby}>{hobby.nombre}</Text>
              
              {/*Detalle si está abierto*/}

              {estaAbierto ? (
                <Text style={stylesHobbies.textoDetalle}>{hobby.detalle}</Text>
              ) : (
                <Text style={stylesHobbies.subtexto}>Toca para ver detalles</Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const stylesHobbies = StyleSheet.create({
  tarjetaHobby: { 
    borderLeftWidth: 4, 
    borderLeftColor: "#1a5be9",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 12,
  },
  imagenHobby: {
    width: 60,
    height: 80, 
    borderRadius: 6,
    marginRight: 12,
    backgroundColor: "#ffffff",
  },
  textoContainer: {
    flex: 1,
  },
  textoHobby: { 
    fontSize: 16, 
    fontWeight: "600", 
    color: "#1a0e0e" 
  },
  subtexto: { 
    fontSize: 12, 
    color: "#869fc2", 
    marginTop: 4 
  },
  textoDetalle: {
    fontSize: 14,
    color: "#415a7c",
    marginTop: 6,
    lineHeight: 20,
  },
});
