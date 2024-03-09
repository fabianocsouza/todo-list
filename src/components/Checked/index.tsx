import checkActive from "@assets/check-active.png";
import { Container, Icon, Strikethrough, Touchable, View } from "./styles";

type Props = {
  text: string;
  handlePress: () => void;
  isChecked: boolean;
}

export const Checked = ({ text, handlePress, isChecked }: Props ) => {
  return (
    <Container>
    <Touchable
      onPress={handlePress}
      underlayColor="transparent"
    >
      <View>
        {isChecked && <Icon source={checkActive}/>}
      </View>
    </Touchable>
    <Strikethrough
      active={isChecked}
    >{text}</Strikethrough>
    </Container>
  );
};


