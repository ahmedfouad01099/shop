import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CartItem(props) {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity} </Text>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.amount}>
          $ {props.amount > 0 ? props.amount.toFixed(2) : 0.00}
        </Text>
        <TouchableOpacity onPress={props.onRemove}>
          <Ionicons name="trash" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "open-sans-bold",
    color: "#000",
    fontSize: 16,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
    fontFamily: "open-sans-bold",
  },
  deleteButton: {
    marginLeft: 20,
  },
});

export default CartItem;
