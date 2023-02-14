import { View, Image as Img, Linking } from "react-native";
import styled from "styled-components/native";
import { Text, Image } from "../../../../global/styles";

export const Container = styled.View`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Complaint: React.FC = () => {
  return (
    <Container>
      <Text fontSize="24px" color="white" style={{ marginTop: 10 }}>
        Faça sua denúncia
      </Text>
      <View style={{ backgroundColor: "#f0f0f0", padding: 15 }}>
        <Text fontSize="16px" color="#000" style={{ marginTop: 10 }}>
          Secretaria de desenvolvimento Territorial e Meio Ambiente - SEDET
        </Text>
        <Text fontSize="16px" color="#000" style={{ marginTop: 10 }}>
          Telefone: (82) 3312-5200
        </Text>
        <Text fontSize="16px" color="#000" style={{ marginTop: 10 }}>
          Disque Denúncia: (82) 3312-5204
        </Text>
        <Text fontSize="16px" color="#000" style={{ marginTop: 10 }}>
          Denúncia ambiental: {"\n"}Email:
          coord.fiscalizacaoambiental@sedet.maceio.al.gov.br
        </Text>
        <Text fontSize="16px" color="#000" style={{ marginTop: 10 }}>
          Telefone: (82) 3312-5242
        </Text>
      </View>
    </Container>
  );
};

export default Complaint;
