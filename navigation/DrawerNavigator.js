import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ShopNavigator from "./ShopNavigator";
import OrderNavigator from "./OrderNavigator";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import AdminNavigator from "./AdminNavigator";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{ labelStyle: { color: Colors.primary } }}
      >
        <Drawer.Screen
          options={{
            drawerIcon: (drawerConfig) => (
              <Entypo name="shopping-bag" size={24} color={Colors.primary} />
            ),
            // headerTitleStyle: { color: Colors.primary },
          }}
          name="Products"
          component={ShopNavigator}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <Entypo name="list" size={24} color={Colors.primary} />
            ),
          }}
          name="orders"
          component={OrderNavigator}
        />

        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <Ionicons name="create" size={24} color={Colors.primary} />
            ),
          }}
          name="user"
          component={AdminNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
