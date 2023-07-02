import React from "react";
import { Switch, Text, View, TextInput, Button, Keyboard } from "react-native";
import styles from "./styles.js";
import { useState } from "react";

export default function Form(props) {
  //Creating button press event
  const handleAddPress = () => {
    if (taskDescription) {
      //Sends the user input to the component that manages the list
      props.onAddTask(taskDescription, taskDone);

      setErrorMessage(null);
      setTaskDescription("");
      setTaskDone(false);

      Keyboard.dismiss();
    } else {
      setErrorMessage("The description is required.");
    }
  };

  //Sets the default text in the description
  const [taskDescription, setTaskDescription] = useState("");

  const handleDescriptionChange = (value) => {
    setTaskDescription(value);
  };

  //For status change
  const [taskDone, setTaskDone] = useState(false);
  const handleStatusChange = (value) => {
    setTaskDone(value);
  };

  //Validating user input for empty description
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <View style={styles.container}>
      {errorMessage && (
        <View>
          <Text>Attention:</Text>
          <Text>{errorMessage}</Text>
        </View>
      )}
      <TextInput
        placeholder="Enter a task description"
        maxLength={150}
        onChangeText={handleDescriptionChange}
        defaultValue={taskDescription}
        style={styles.textStyle}
      />
      <View>
        <Text>Completed:</Text>
        <Switch
          value={taskDone}
          onValueChange={handleStatusChange}
          trackColor={{ true: "#2a4d69", false: "#e7eff6" }}
          thumbColor={"#b3cde0"}
        />
      </View>
      <Button title="Add" onPress={handleAddPress} color={"#051e3e"} />
    </View>
  );
}
