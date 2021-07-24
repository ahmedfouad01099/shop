import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

function ProductDetailScreen(props) {
  const { productId, productTitle } = props.route.params;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  useEffect(() => {
    props.navigation.setParams({ prodTitle: productTitle });
  }, []);

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
}

export default ProductDetailScreen;
