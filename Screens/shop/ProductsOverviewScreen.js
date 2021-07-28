import React from "react";
import { Button, FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItems from "../../Components/shop/ProductItems";
import Colors from "../../constants/Colors";
import * as CartActions from "../../Store/ducks/Cart/Cart";

function ProductsOverviewScreen(props) {
  const products = useSelector((state) => state.products.availableProducts);

  const dispatch = useDispatch();

  const onViewDetail = (itemData) =>
    props.navigation.navigate("ProductDetail", {
      productId: itemData.item.id,
      productTitle: itemData.item.title,
    });

  const onAddToCart = (itemData) =>
    dispatch(CartActions.addToCart(itemData.item));
  return (
    <View>
      <FlatList
        data={products}
        renderItem={(itemData) => (
          <ProductItems
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetail={() => onViewDetail(itemData)}
          >
            <Button
              color={Colors.primary}
              title="View Details"
              onPress={() => onViewDetail(itemData)}
            />
            <Button
              color={Colors.primary}
              title="To Cart"
              onPress={() => onAddToCart(itemData)}
            />
          </ProductItems>
        )}
      />
    </View>
  );
}

export default ProductsOverviewScreen;
