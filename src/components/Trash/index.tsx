import { styles } from "./styles";
import { Pressable } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

type Props = {
  onRemove: () => void;
};

export function Trash({ onRemove }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        !pressed ? { backgroundColor: "#262626" } : { backgroundColor: "#333" },
        styles.container,
      ]}
      onPress={onRemove}
    >
      {({ pressed }) => (
        <FontAwesome5
          name="trash-alt"
          size={18}
          color={!pressed ? "#808080" : "#E25858"}
        />
      )}
    </Pressable>
  );
}
