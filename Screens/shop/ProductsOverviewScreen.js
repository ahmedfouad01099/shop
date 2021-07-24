import React from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import ProductItems from "../../Components/shop/ProductItems";

function ProductsOverviewScreen(props) {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <View>
      <FlatList
        data={products}
        renderItem={(itemData) => (
          <ProductItems
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetail={() => {
              props.navigation.navigate("ProductDetail", {
                productId: itemData.item.id,
                productTitle: itemData.item.title,
              });
            }}
            onAddToCart={() => {}}
          />
        )}
      />
    </View>
  );
}

export default ProductsOverviewScreen;
