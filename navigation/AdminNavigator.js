import * as React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import OrdersScreen from "../Screens/shop/OrdersScreen";
import { Feather } from "@expo/vector-icons";
import UserProductsScreen from "../Screens/user/UserProductsScreen";
import EditProductScreen from "../Screens/user/EditProductScreen";

const Stack = createStackNavigator();

function AdminNavigator() {
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
        name="Your Products"
        component={UserProductsScreen}
      />

      <Stack.Screen
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
          headerTitle: route.params.productId
            ? `Edit ${route.params.title}`
            : "Add Product",
          headerRight: () => (
            <>
              <Feather
                name="save"
                size={24}
                color="white"
                style={{ marginRight: 10 }}
                onPress={() => {}}
              />
            </>
          ),
        })}
        name="Edit Product"
        component={EditProductScreen}
      />
    </Stack.Navigator>
  );
}

export default AdminNavigator;
