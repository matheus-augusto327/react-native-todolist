import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Task from "../../Taks";
import { styles } from "./styles";

export default function Home() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [finishedTasks, setFinishedTasks] = useState(0);

  function handleToggleCompleteTask(checkboxState: boolean) {
    if (checkboxState) {
      setFinishedTasks(finishedTasks - 1);
    } else {
      setFinishedTasks(finishedTasks + 1);
    }
  }

  function handleTaskAdd() {
    if (tasks.includes(taskText)) {
      return Alert.alert("Task já existe", "Essa task já foi criada!");
    }
    setTasks((prevState) => [...prevState, taskText]);
    setTaskText("");
  }

  function handleTaskRemove(taskText: string) {
    Alert.alert("Remover", "Tem certeza que deseja remover essa task?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task !== taskText)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/logo.png")} />
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={taskText}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTaskText}
          />

          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Image source={require("../../../assets/plusIcon.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.labelsContainer}>
          <View style={styles.label}>
            <Text style={styles.createdTasksLabel}>Criadas</Text>
            <Text style={styles.taskCounter}>{tasks.length}</Text>
          </View>
          <View style={styles.label}>
            <Text style={styles.finishedTasksLabel}>Concluídas</Text>
            <Text style={styles.taskCounter}>{finishedTasks}</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              text={item}
              onRemove={() => handleTaskRemove(item)}
              handleToggleCompleteTask={handleToggleCompleteTask}
            />
          )}
        />
      </View>
    </View>
  );
}
