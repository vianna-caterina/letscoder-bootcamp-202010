import React from "react";
import Card from "./Card";
import { FlatList, ScrollView, TouchableWithoutFeedback } from "react-native";

export default function Listing({ activities }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <FlatList
        data={activities}
        keyExtractor={activities.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={require("../assets/yoga.jpg")}
          />
        )}
      />
    </ScrollView>
  );
}
