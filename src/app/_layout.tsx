import { Ionicons }  from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#2563eb" }}>
      {/* Pestaña de Inicio */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerTitle: "Datos Personales",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color as string} />
          ),
        }}
      />
      {/* COMPLETAR: Agrega aquí la pestaña "estudios" con el icono "school-outline" */}
      <Tabs.Screen
        name="estudios"
        options={{
          title: "Estudios",
          headerTitle: "Formación académica",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school-outline" size={size} color={color as string} />
          ),
        }}
      />
      {/* COMPLETAR: Agrega aquí la pestaña "experiencia" con el icono "briefcase-outline" */}
      <Tabs.Screen
        name="experiencia"
        options={{
          title: "Experiencia",
          headerTitle: "Experiencia laboral",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={color as string} />
          ),
        }}
      />
      {/* COMPLETAR: Agrega aquí la pestaña "hobbies" con el icono "heart-outline" */}
        <Tabs.Screen
        name="hobbies"
        options={{
          title: "Hobbies",
          headerTitle: "Pasatiempos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color as string} />
          ),
        }}
      />
    </Tabs>
  );
}