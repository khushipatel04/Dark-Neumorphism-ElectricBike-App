const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import LockClose from "./screens/LockClose";
import HomePage from "./screens/HomePage";
import ControlOff from "./screens/ControlOff";
import ControlOn from "./screens/ControlOn";
import ControlSpeed from "./screens/ControlSpeed";
import ChargeSpeed from "./screens/ChargeSpeed";
import ChargeSpeed1 from "./screens/ChargeSpeed1";
import ChargeSpeedWirhTableView from "./screens/ChargeSpeedWirhTableView";
import ChargeSpeedWirhTableView1 from "./screens/ChargeSpeedWirhTableView1";
import StatusBarIPhone1313Pro from "./components/StatusBarIPhone1313Pro";
import LockUnlockPage from "./screens/LockUnlockPage";
import LockOpen from "./screens/LockOpen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LockClose"
              component={LockClose}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ControlOff"
              component={ControlOff}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ControlOn"
              component={ControlOn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ControlSpeed"
              component={ControlSpeed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChargeSpeed"
              component={ChargeSpeed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChargeSpeed1"
              component={ChargeSpeed1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChargeSpeedWirhTableView"
              component={ChargeSpeedWirhTableView}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChargeSpeedWirhTableView1"
              component={ChargeSpeedWirhTableView1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LockUnlockPage"
              component={LockUnlockPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LockOpen"
              component={LockOpen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
