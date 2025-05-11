import { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Pressable, PressableProps } from "react-native";

import { styles } from "./styles";

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
