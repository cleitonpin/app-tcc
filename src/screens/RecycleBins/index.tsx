import Background from "../../components/Container";
import Ecopoint from "../../components/Ecopoint";
import { Text } from "../../global/styles";
import { Container } from "./style";
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { FranchiseData, getFranchises } from "../../services/franchises";
import { useNavigation } from "@react-navigation/native";
import { franchises } from "../../mocks/franchises";

interface RecycleBinsProps {}

const RecycleBins: React.FC<RecycleBinsProps> = () => {
  const [ecopoints, setEcopoints] = useState<FranchiseData>();
  const [loading, setLoading] = useState(true);

  const fetchEcopoints = async () => {
    // const response = await getFranchises();
    setEcopoints(franchises);
    setLoading(false);
  };

  useEffect(() => {
    fetchEcopoints();
  }, []);

  if (loading) {
    return (
      <Container p={25}>
        <Text fontSize="24px" color="white">
          Carregando...
        </Text>
      </Container>
    );
  }

  return (
    <Background>
      <Container p={25} mTop={50}>
        <Text fontSize="24px" color="white">
          Ecopontos
        </Text>
        <Text fontSize="12px" color="white">
          Locais
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          {ecopoints?.franchises.map((ecopoint, index) => (
            <Ecopoint
              key={index}
              name={ecopoint.companyName}
              address={ecopoint.street}
              lat={ecopoint.latitude}
              long={ecopoint.longitude}
            />
          ))}
        </ScrollView>
      </Container>
    </Background>
  );
};

export default RecycleBins;
