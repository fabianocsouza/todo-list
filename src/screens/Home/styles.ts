import { TextInput, TouchableHighlight } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

`;

export const Header = styled.View`
  width: 100%;
  height: 220px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
    width: 140px;
    height: 40px;
`;


export const Form = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: center;

  border-radius: 6px;

  padding: 24px;
  margin-top: -50px;

`;

type Props ={
  ativo: boolean;
}

export const Input = styled(TextInput)<Props>`
  flex: 1;
  min-height: 54px;
  max-height: 54px;

  ${({ ativo, theme }) => css`
    background-color: ${theme.COLORS.GRAY_500};
    border: 1px solid ${ ativo ? theme.COLORS.PURPLE: theme.COLORS.GRAY_700 };
    color: ${theme.COLORS.GRAY_100};
    
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  border-radius: 6px;
  padding: 16px;
`;

export const ButtonCreate = styled(TouchableHighlight).attrs(({ theme }) => ({ 
  underlayColor: theme.COLORS.BLUE,
}))`
  flex: 1;
  max-width: 52px;
  min-height: 52px;

  background-color: ${({ theme }) =>  (theme.COLORS.BLUE_DARK)};

  border-radius: 8px;
  margin-left: 4px;

  align-items: center;
  justify-content: center;
`;

export const Plug = styled.Image`
    width: 16px;
    height: 16px;
`;

export const Info = styled.View`
  padding: 24px;

  justify-content:space-between;
  flex-direction: row;
  align-items: center;
`;

export const Created = styled.Text`
  ${({theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BLUE};
  `};
`;

export const Done = styled.Text`
  ${({theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.PURPLE};
  `};

  margin-left:180px;
`;

export const Counter = styled.View`
  width: 25px;
  height: 19px;
  ${({theme }) => css`
    background-color: ${theme.COLORS.GRAY_400};
  `};
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Value = styled.Text`
  ${({theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
    background-color: ${theme.COLORS.GRAY_400};
  `};
`;