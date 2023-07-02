import { useState } from "react";
import { Text, View, Pressable, Modal } from "react-native";
import { Switch } from "react-native";
import styles from "./styles.js";
import { Alert } from "react-native";

export default function Task(props) {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleStatusChangePress = () => {
    console.log("Status Changed.");
    props.onStatusChange(props.task.id);
  };

  const handleRemovePress = () => {
    Alert.alert(
      "Remove Task",
      "This action will permanently delete this task. This action cannot be undone!",
      [
        {
          text: "Confirm",
          onPress: () => {
            props.onTaskRemoval(props.task.id);
            console.log("Removed.");
            setShowModal(false);
          },
        },
        {
          text: "Cancel",
        },
      ]
    );
  };

  return (
    <>
      <Pressable onPress={handleModalToggle}>
        <View style={styles.container}>
          <Text style={styles.title}>{props.task.description}</Text>
          <Text style={styles.text}>Id: {props.task.id}</Text>
          <Text style={styles.text}>
            Status: {props.task.done ? "Completed" : "Open"}
          </Text>
        </View>
      </Pressable>
      <Modal visible={showModal}>
        <View>
          <Pressable onPress={handleModalToggle}>
            <Text style={styles.closeBtn}>CLOSE</Text>
          </Pressable>

          <Text style={styles.textStyle}>{props.task.description}</Text>
        </View>

        <View>
          <Text style={styles.toggleText}>Toggle Status</Text>
          <Switch
            value={props.task.done}
            onValueChange={handleStatusChangePress}
            trackColor={{ true: "#2a4d69", false: "#e7eff6" }}
            thumbColor={"#b3cde0"}
          />
        </View>

        <View>
          <Pressable onPress={handleRemovePress}>
            <Text style={styles.removeBtn}>Remove</Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
}
