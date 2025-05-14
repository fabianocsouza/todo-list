import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { styles } from "./styles";

import Logo from "../../assets/logo.svg";

import { useTask } from "../../hooks";
import { Task } from "../../components/Task";
import { Empty } from "../../components/Empty/Empty";
import { taskStorage, type TaskStorage } from "../../storage/task-storage";

export function Home() {
  const [isFocused, setIsFocused] = useState(false);

  // const { task, addTask } = useTask();
  const [task, setTask] = useState<TaskStorage[]>([]);
  const [taskTitle, setTaskTitle] = useState("");
  const checkedCount = task.filter((task) => task.check).length;

  async function handleTask() {
    Keyboard.dismiss();
    // addTask(taskName);
    setTaskTitle("");

    try {
      await taskStorage.save({
        id: new Date().getTime().toString(),
        title: taskTitle,
        check: false,
      });
      const data = await taskStorage.get();
      console.log(data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar task!");
      console.log(error);
    }
  }

  async function getTasks() {
    try {
      const response = await taskStorage.get();
      setTask(response);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível listar as tarefas");
    }
  }

  useEffect(() => {
    getTasks();
  }, [task]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo width={200} height={200} />
      </View>

      <View style={styles.form}>
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />

        <TouchableOpacity style={styles.button} onPress={handleTask}>
          <AntDesign name="pluscircleo" size={18} color="#F2F2F2" />
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.created}>
          <Text style={styles.textCreated}>Criadas</Text>

          <View style={styles.counter}>
            <Text style={styles.textCounter}>{task.length}</Text>
          </View>
        </View>
        <View style={styles.done}>
          <Text style={styles.textDone}>Concluídas</Text>
          <View style={styles.counter}>
            <Text style={styles.textCounter}>{checkedCount}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={task}
        style={styles.list}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            id={item.id}
            title={item.title}
            isChecked={item.check}
          />
        )}
        ListEmptyComponent={<Empty />}
      />
    </View>
  );
}
