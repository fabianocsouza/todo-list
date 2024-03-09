import styled, { css } from "styled-components/native";

type Props = {
  done: boolean;
}

export const Container = styled.View<Props>`
  width: 380px;
  margin-left: 24px;
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  
  ${({done, theme}) => css`
    background-color: ${theme.COLORS.GRAY_500};
    border: 1px solid ${done ?theme.COLORS.GRAY_500: theme.COLORS.GRAY_400};
    transition: border .2s ease;
  `};

  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
