import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Platform } from "react-native";

function HeaderButton(props) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : "black"}
    />
  );
}

export default HeaderButton;
