import { TouchableHighlight } from "react-native";
import styled from "styled-components/native";


export const Touchable = styled(TouchableHighlight).attrs(({ theme }) => ({ 
  underlayColor: theme.COLORS.GRAY_400,
}))`
  flex: 1;

  background-color: transparent;

  border-radius: 4px;
  margin-right: 28px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 45px;
  height: 45px;
`;