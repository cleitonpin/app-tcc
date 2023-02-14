import { View } from "react-native";
import { ScrollView, StyleSheet, Modal } from "react-native";
import { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import * as Location from "expo-location";

// components
import { Text } from "../../global/styles";
import { Container } from "../RecycleBins/style";
import Background from "../../components/Container";
import Card from "../../components/Card";
import DisposalIncorrect from "./components/DisposalIncorrect";
import Friends from "./components/Friends";
import Justice from "./components/Justice";
import Recycling from "./components/Recycling";
import { ModalContent, ModalView } from "./style";
import useGetLocation from "../../hooks/useGetLocation";
import { DefaultPage } from "./components/DefaultPage";
import styled from "styled-components/native";

interface HomeProps {}

const ContainerPage = styled.View`
  margin-top: 10px;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  margin-top: 20px;
`;

const CARDS = [
  {
    title: "Descarte Incorreto",
    value: 1,
    icon: require("../../assets/recycling.png"),
  },
  {
    title: "Amigos do meio ambiente",
    value: 2,
    icon: require("../../assets/gardening.png"),
  },
  {
    title: "Conheça seus direitos",
    value: 3,
    icon: require("../../assets/eye.png"),
  },
  {
    title: "Reciclagem",
    value: 4,
    icon: require("../../assets/recycle.png"),
  },
  {
    title: "Logística reversa",
    value: 5,
    icon: require("../../assets/reverse.png"),
  },
  {
    title: "Faça sua denúncia",
    value: 6,
    icon: require("../../assets/denuncia.png"),
  },
];

const renderContent = (
  key: number,
  location: Location.LocationObject | null
) => {
  switch (key) {
    case 0:
      return <DefaultPage location={location} />;
    case 1:
      return <DisposalIncorrect />;
    case 2:
      return <Friends />;
    case 3:
      return <Justice />;
    case 4:
      return <Recycling />;
    case 6:
      <ContainerPage>
        <Text fontSize="24px" color="white" style={{ marginTop: 10 }}>
          Curiosidades
        </Text>
        <View style={{ backgroundColor: "#f0f0f0" }}>
          <Text fontSize="16px" color="white" style={{ marginTop: 10 }}>
            Secretaria de desenvolvimento Territorial e Meio Ambiente - SEDET
          </Text>
          <Text fontSize="16px" color="white" style={{ marginTop: 10 }}>
            Telefone: (82) 3312-5200
          </Text>
          <Text fontSize="16px" color="white" style={{ marginTop: 10 }}>
            Disque Denúncia: (82) 3312-5204
          </Text>
          <Text fontSize="16px" color="white" style={{ marginTop: 10 }}>
            Denúncia ambiental: Email:
            coord.fiscalizacaoambiental@sedet.maceio.al.gov.br
          </Text>
          <Text fontSize="16px" color="white" style={{ marginTop: 10 }}>
            Telefone: (82) 3312-5242
          </Text>
        </View>
      </ContainerPage>;

    default:
      return <Text>Erro</Text>;
  }
};

const Home: React.FC<HomeProps> = () => {
  const [key, setKey] = useState(0);
  const [selectedKey, setSelectedKey] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const location = useGetLocation();

  const onCardPress = (key: number) => {
    if (key === selectedKey) {
      setKey(0);
      setSelectedKey(0);
    } else {
      key === 5 ? setModalVisible(true) : setKey(key);
      setSelectedKey(key);
    }
  };

  return (
    <Background>
      <Container p={25} mTop={35}>
        {renderContent(key, location)}

        <View style={{ width: "100%" }}>
          <Text fontSize="24px" color="white" style={{ marginTop: 10 }}>
            Curiosidades
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            {CARDS.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                onPress={() => onCardPress(card.value)}
                source={card.icon}
              />
            ))}
          </ScrollView>
        </View>

        <Modal
          visible={modalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setKey(0)}
        >
          <ModalView>
            <ModalContent>
              <Text fontSize="24px" color="#000">
                Logística reversa
              </Text>
              <Text fontSize="14px" style={{ marginTop: 10 }}>
                Irá viabilizar o retorno de medicamentos para o setor
                empresarial e para destinação final ambientalmente adequada e
                suas embalagens e bulas para produção de novos produtos
              </Text>

              <Feather
                name="x"
                size={24}
                color="#000"
                style={{ position: "absolute", top: 18, right: 15 }}
                onPress={() => setModalVisible(false)}
              />
            </ModalContent>
          </ModalView>
        </Modal>
      </Container>
    </Background>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 10,
  },
});

export default Home;
