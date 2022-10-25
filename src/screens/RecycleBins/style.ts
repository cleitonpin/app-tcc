import styled from "styled-components/native";

type ContainerProps = {
  p: number;
  mTop: number;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  /* background-color: #222431; */
  padding: ${(props) => props.p}px;
  margin-top: ${(props) => props.mTop || "0"}px;
  align-content: flex-start;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;
