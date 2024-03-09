import { TouchableHighlight } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-left: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const View = styled.View`
    width: 24px;
    height: 24px;
    border-width: 2px;
    border-radius: 50%;
    border-color: #4EA8DE;
    align-items: center;
    justify-content: center;
    margin-top: -5px;
`;

export const Touchable = styled(TouchableHighlight)`
flex: 1;
`;

export const Icon = styled.Image`
  width:24px;
  height:24px;
`;
type Props = {
  active: boolean;
}
export const Strikethrough = styled.Text<Props>`
  ${({ active , theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${ active ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
    text-decoration:  ${ active ? `line-through ${theme.COLORS.GRAY_300}`: 'none' };
  `};

  width: 260px;
  height: 34px;

  margin-right: 25px;

`;