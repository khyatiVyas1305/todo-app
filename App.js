import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
//import { Header } from "react-native/Libraries/NewAppScreen";
import Header from "./src/components/Header/Header.js";
import Tasks from "./src/components/Tasks/Tasks.js";
import Form from "./src/components/Form/Form.js";
import styles from "./src/styles/main.js";
import { Image } from "react-native";
import uuid from "react-uuid";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: "Walk the dog",
      done: true,
    },
    {
      id: uuid(),
      description: "Wash the car",
      done: false,
    },
    {
      id: uuid(),
      description: "Finish the lab",
      done: false,
    },
  ]);

  //Adds new task to the list
  const handleAddTask = (taskDescription, taskDone) => {
    const updatedTasks = [...tasks];
    updatedTasks.push({
      id: uuid(),
      description: taskDescription,
      done: taskDone,
    });
    setTasks(updatedTasks);
  };

  const handleStatusChange = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleTaskRemoval = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="List">
            {(props) => (
              <Tasks
                {...props}
                tasks={tasks}
                onStatusChange={handleStatusChange}
                onTaskRemoval={handleTaskRemoval}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="Add">
            {(props) => <Form {...props} onAddTask={handleAddTask} />}
          </Tab.Screen>
        </Tab.Navigator>
        {/* <Form onAddTask={handleAddTask}></Form> */}
      </View>
    </NavigationContainer>
  );
}
