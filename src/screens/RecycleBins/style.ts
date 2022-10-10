import styled from 'styled-components/native';

type ContainerProps = {
  p: number;
  mTop: number;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  /* background-color: #222431; */
  padding: ${props => props.p}px;
  margin-top: ${props => props.mTop || "0"}px;
  align-content: flex-start;
`