import * as React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsOverviewScreen from "../Screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import ProductDetailScreen from "../Screens/shop/ProductDetailScreen";
import { Feather } from "@expo/vector-icons";
import CartScreen from "../Screens/shop/CartScreen";

const Stack = createStackNavigator();

function ShopNavigator() {
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
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Shop Cart");
              }}
            >
              <Feather
                name="shopping-cart"
                size={24}
                color="white"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
        name="All Products"
        component={ProductsOverviewScreen}
      />

      <Stack.Screen
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        })}
        name="Shop Cart"
        component={CartScreen}
      />

      <Stack.Screen
        component={ProductDetailScreen}
        name="ProductDetail"
        options={({ route, navigation }) => ({
          title: route.params.prodTitle,
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
          },
          headerBackTitleStyle: {
            fontFamily: "open-sans",
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Shop Cart");
              }}
            >
              <Feather
                name="shopping-cart"
                size={24}
                color="white"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default ShopNavigator;
