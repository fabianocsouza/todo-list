import { Alert, Text, View } from "react-native";

import { styles } from "./styles";

import { taskStorage } from "../../storage/task-storage";

import { Trash } from "../Trash";
import { Check } from "../Check";

type Props = {
  id: string;
  title: string;
  isChecked: boolean;
};

export function Task({ title, id, isChecked }: Props) {
  async function handleChecked() {
    await taskStorage.updated(id, !isChecked);
  }

  async function taskRemove() {
    try {
      await taskStorage.remove(id);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível remover!");
    }
  }

  function handleRemove() {
    Alert.alert("Excluir", "Deseja realmente excluir?", [
      { style: "cancel", text: "Não" },
      { text: "Sim", onPress: taskRemove },
    ]);
  }

  return (
    <View style={[styles.container, isChecked && { borderColor: "#262626" }]}>
      <Check checked={isChecked} onPressClick={handleChecked} />
      <Text style={[styles.text, isChecked && styles.textCheck]}>{title}</Text>
      <Trash onRemove={handleRemove} />
    </View>
  );
}
