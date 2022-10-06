
import React from "react";
import { Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function  User({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text style={{ color: "#808000", fontSize: 40 }}>User</Text>
    <FontAwesome5 name="user-circle" size={89} color="gray"  />
  </View>
  );
}