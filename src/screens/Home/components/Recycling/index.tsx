import { Image } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../../global/styles";

const Container = styled.View`
  margin-top: 10px;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  margin-top: 20px;
`;

const Recycling: React.FC<any> = () => {
  return (
    <Container>
      <Text fontSize="24px" color="white" fontWeight="bold">
        Dicas de reciclagem
      </Text>

      <Text
        fontSize="18px"
        color="white"
        style={{ lineHeight: 22, marginTop: 10 }}
      >
        Na sua casa, separe as caixas dos medicamentos vencidos ou em desuso e
        as bulas, pois podem servir como matéria prima para produção de novos
        produtos.
        {"\n\n"}
        Já as embalagens de vidros e plásticos que tiveram contato com os
        medicamentos devem ser entregues nos pontos de coleta de medicamentos.
      </Text>
    </Container>
  );
};

export default Recycling;
