import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`

export const Title = styled.Text`
  color: #FFB703;
  font-size: 50px;
  text-shadow: 0px 4px 4px rgba(0,0,0,0.3);
`;

export const BtnContent = styled.View`
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  border: 2px solid;
  border-color: ${theme.colors.yellowDark};
  flex-direction: row;
`;

export const BtnTextCont = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const BtnText = styled.Text`
  font-size: 24px;
  color: ${theme.colors.light};
`;

export const BtnIconCont = styled.View`
  height: 100%;
  width: 15%;
  position: absolute;
  right: 0px;
  justify-content: center;
  align-items: center;
`;