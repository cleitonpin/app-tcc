import { StyledComponent } from "styled-components";
import styled, { DefaultTheme } from "styled-components/native";
import { Text as TextNative } from "react-native"

type TextProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: string | number;
  textAlign?: string;
  margin?: string;
  padding?: string;
  lineHeight?: number;
  letterSpacing?: string;
}

export const Text: StyledComponent<typeof TextNative, DefaultTheme, TextProps, never> = styled.Text<TextProps>`
  font-size: ${props => props.fontSize || '16px'};
  font-family: 'Rajdhani_500Medium';
  font-weight: ${props => props.fontWeight || 'normal'};
  /* line-height: ${props => props.lineHeight || 24}; */
  /*color: ${props => props.color || '#000'};
  text-align: ${props => props.textAlign || 'left'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  letter-spacing: ${props => props.letterSpacing || 'normal'}; */
  color: ${({ color }) => color};
`