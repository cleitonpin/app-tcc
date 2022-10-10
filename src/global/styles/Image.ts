import styled from "styled-components/native";
import { ImageProps } from "react-native";

interface ImageStyledProps extends ImageProps {
  width?: number | string;
  height?: number | string;
  // borderRadius: number;
  // margin: number;
  // padding: number;
  // resizeMode: string;
}

const Image = styled.Image<ImageStyledProps>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`

export default Image;