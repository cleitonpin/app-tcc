import { Image } from "react-native";
import Background from "../../components/Container";
import { Text } from "../../global/styles";
import theme from "../../global/styles/theme";
import * as Location from "expo-location";
import { useEffect } from "react";

import AntDesign from "react-native-vector-icons/AntDesign";
import {
  Btn,
  BtnContent,
  BtnIconCont,
  BtnText,
  BtnTextCont,
  Container,
  Title,
} from "./style";

const Welcome: React.FC<any> = ({ navigation }) => {
  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // setErrorMsg('Permission to access location was denied');
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Background>
      <Container>
        <Image
          source={require("../../assets/map_welcome.png")}
          style={{ height: 210, width: 210 }}
        />

        <Title>DescartFarm</Title>
        <Text fontSize="18px" color="white">
          Você sabe o que fazer com os medicamentos vencidos ou em desuso?
        </Text>

        <BtnContent>
          <Btn onPress={() => navigation.navigate("tabNavigation")}>
            <BtnTextCont>
              <BtnText>Começar</BtnText>
            </BtnTextCont>
            <BtnIconCont>
              <AntDesign
                name="arrowright"
                size={32}
                color={theme.colors.light}
              />
            </BtnIconCont>
          </Btn>
        </BtnContent>
      </Container>
    </Background>
  );
};

export default Welcome;
