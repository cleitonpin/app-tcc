import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ContainerBackground } from "./styles";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export default function Background({ children }: Props) {
  return (
    <LinearGradient colors={["#62B8F6", "#2C79C1", "#023E8A"]}>
      <ContainerBackground>{children}</ContainerBackground>
    </LinearGradient>
  );
}
