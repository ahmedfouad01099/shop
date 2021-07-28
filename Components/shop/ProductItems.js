import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

function ProductItems(props) {
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>{props.price.toFixed(2)}</Text>
        <View style={styles.actions}>{props.children}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  image: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },

  price: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ProductItems;
