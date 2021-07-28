import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "../../Components/shop/OrderItem";

function OrdersScreen() {
  const orders = useSelector((state) => state.order.orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id + Math.random()}
      renderItem={(itemData) => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
          items={itemData.item.item}
        />
      )}
    />
  );
}

export default OrdersScreen;
