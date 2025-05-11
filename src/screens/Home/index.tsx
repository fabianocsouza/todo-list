import { useState } from "react";
import {
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

export function Home() {
  const [isFocused, setIsFocused] = useState(false);

  const { task, addTask } = useTask();
  const [taskName, setTaskName] = useState("");
  const checkedCount = task.filter((task) => task.check).length;

  function handleTask() {
    Keyboard.dismiss();
    addTask(taskName);
    setTaskName("");
  }

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
          value={taskName}
          onChangeText={setTaskName}
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
        keyExtractor={({ title }) => title}
        renderItem={({ index, item }) => (
          <Task key={index} id={index} title={item.title} />
        )}
        ListEmptyComponent={<Empty />}
      />
    </View>
  );
}
