import React, { useState } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

import { Trash } from "../Trash";
import { Check } from "../Check";
import { useTask } from "../../hooks";

type Props = {
  id: number;
  title: string;
};

export function Task({ title, id }: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const { task, toggleCheck, updateTask } = useTask();

  function handleChecked() {
    setIsChecked(!isChecked);
    toggleCheck(id);
  }

  function handleRemove() {
    updateTask(task.filter((item) => item.title !== title));
  }

  return (
    <View style={[styles.container, isChecked && { borderColor: "#262626" }]}>
      <Check value={isChecked} onPressClick={handleChecked} />
      <Text style={[styles.text, isChecked && styles.textCheck]}>{title}</Text>
      <Trash onRemove={handleRemove} />
    </View>
  );
}
