import React from "react";
import { View, FlatList } from "react-native";
// Flatlist creates list of Items
// Flatlist(Items array, How to render these Items, key for these items for easy render)
import { ListItem } from "react-native-elements";

function Menu(props) {
  const renderMenuItem = ({ item, index }) => {
    // Can read documentation of ListItem
    return (
      <ListItem
        key={index}
        title={item.name}
        subtitle={item.description}
        hideChevron={true}
        onPress={() => props.onPress(item.id)}
        leftAvatar={{ source: require("./images/uthappizza.png") }}
      />
    );
  };

  return (
    <FlatList
      data={props.dishes}
      renderItem={renderMenuItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default Menu;
