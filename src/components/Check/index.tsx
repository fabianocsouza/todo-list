import { Pressable, type PressableProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { useEffect, useState } from "react";

type Props = PressableProps & {
  onPressClick?: () => void;
  value: boolean;
};

export function Check({ value, onPressClick }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    setIsChecked(value);
  }, [value]);

  return (
    <Pressable
      style={isChecked ? styles.containerII : styles.container}
      onPress={onPressClick}
    >
      {isChecked && <Entypo name="check" size={12} color="#F2F2F2" />}
    </Pressable>
  );
}
