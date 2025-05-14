import { Entypo } from "@expo/vector-icons";
import { Pressable, PressableProps } from "react-native";

import { styles } from "./styles";

type Props = PressableProps & {
  onPressClick?: () => void;
  checked: boolean;
};

export function Check({ checked, onPressClick }: Props) {
  return (
    <Pressable
      style={checked ? styles.containerII : styles.container}
      onPress={onPressClick}
    >
      {checked && <Entypo name="check" size={12} color="#F2F2F2" />}
    </Pressable>
  );
}
