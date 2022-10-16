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

const Justice: React.FC<any> = () => {
  return (
    <Container>
      <Text
        fontSize="24px"
        color="white"
        fontWeight="bold"
        // style={{ lineHeight: 18 }}
      >
        Conheça seus direitos
      </Text>

      <Text fontSize="18px" color="white" style={{ lineHeight: 24 }}>
        O decreto nº 10.388/2020, instituiu o sistema de logística reversa para
        os medicamentos e suas embalagens. Assim as farmácias selecionadas pela
        entidade representativa (Sindicato), deverão funcionar como pontos de
        coleta para receber os medicamentos domiciliares vencidos ou em desuso e
        suas embalagens pelo consumidor
      </Text>

      <Image
        source={require(`../../../../assets/justiceIcons.png`)}
        style={{ marginTop: 20 }}
      />
    </Container>
  );
};

export default Justice;
