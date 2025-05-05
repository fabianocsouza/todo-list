import React, { useState } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { Trash } from "../Trash";
import { Check } from "../Check";

type Props = {
  title: string;
};

export function Task({ title }: Props) {
  const [isChecked, setIsChecked] = useState(false);
  function handleTest() {
    setIsChecked(!isChecked);
  }
  return (
    <View style={[styles.container, isChecked && { borderColor: "#262626" }]}>
      <Check value={isChecked} onPressClick={handleTest} />
      <Text style={[styles.text, isChecked && styles.textCheck]}>{title}</Text>
      <Trash />
    </View>
  );
}
