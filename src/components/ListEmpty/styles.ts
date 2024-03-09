import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin: 24px;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.Image`
  width: 56px;
  height: 56px;
  margin-top: 48px;
  margin-bottom: 23px;
`;
export const TextEmpty = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
export const TextEmpty2 = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;