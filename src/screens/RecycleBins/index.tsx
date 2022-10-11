import Background from "../../components/Container";
import Ecopoint from "../../components/Ecopoint";
import { Text } from "../../global/styles";
import { Container } from "./style";
import { ScrollView } from "react-native"

interface RecycleBinsProps { }

const RecycleBins: React.FC<RecycleBinsProps> = () => {
  return (
    <Background>
      <Container p={25} mTop={50}>
        <Text fontSize="24px" color="white">Ecopontos</Text>
        <Text fontSize="12px" color="white">Locais</Text>

        <ScrollView  showsVerticalScrollIndicator={false}>
          <Ecopoint name="Drogasil" address="Rua Palmeira dos índios" />
          <Ecopoint name="Drogasil" address="Rua Palmeira dos índios" />
          <Ecopoint name="Drogasil" address="Rua Palmeira dos índios" />
          <Ecopoint name="Drogasil" address="Rua Palmeira dos índios" />
          <Ecopoint name="Drogasil" address="Rua Palmeira dos índios" />
          <Ecopoint name="Drogasil" address="Rua Palmeira dos índios" />
          <Ecopoint name="Drogasil" address="Rua Palmeira dos índios" />
          <Ecopoint name="Drogasil" address="Rua Palmeira dos índios" />

        </ScrollView>
      </Container>
    </Background>
  );
}

export default RecycleBins;