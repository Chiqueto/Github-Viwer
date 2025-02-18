import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./pages/main";
import Login from "./pages/login";
import User from "./pages/user";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "LOGIN",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#3498db" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: "GitHub Viwer",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#3498db" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={{
          title: "Cadastro de Usuários",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#3498db" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stack.Navigator>
  );
}
