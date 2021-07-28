import React from "react";
import { Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItems from "../../Components/shop/ProductItems";
import Colors from "../../constants/Colors";
import { deleteProduct } from "../../Store/ducks/Products/products";

function UserProductsScreen(props) {
  const userProducts = useSelector((state) => state.products.userProducts);

  const editProductHandler = (id, title) => {
    console.log("12", id);
    props.navigation.navigate("Edit Product", { productId: id, title: title });
  };
  const dispatch = useDispatch();
  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItems
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {}}
          onAddToCart={() => {}}
        >
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() =>
              editProductHandler(itemData.item.id, itemData.item.title)
            }
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() => {
              dispatch(deleteProduct(itemData.item.id));
            }}
          />
        </ProductItems>
      )}
    />
  );
}

export default UserProductsScreen;
