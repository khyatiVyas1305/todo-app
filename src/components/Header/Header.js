import React from "react";
import { Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./styles.js";

export default function Header() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="tasks" size={32} />
      <Text style={styles.textStyle}> Todo App</Text>
      <Text> by Khyati Vyas</Text>
    </View>
  );
}
