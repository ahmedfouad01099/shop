import * as React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import OrdersScreen from "../Screens/shop/OrdersScreen";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

function OrderNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
          headerLeft: () => (
            <Feather
              name="menu"
              size={24}
              color="white"
              style={{ marginLeft: 10 }}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
        name="Orders"
        component={OrdersScreen}
      />
    </Stack.Navigator>
  );
}

export default OrderNavigator;
