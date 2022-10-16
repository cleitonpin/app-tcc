import { Text } from "../../global/styles";
import { View } from "react-native";
import { ScrollView, StyleSheet, Modal } from "react-native";
import { useState, useEffect } from "react";
import Feather from "react-native-vector-icons/Feather";
import MapView from "react-native-maps";
import * as Location from "expo-location";

// components
import { Container } from "../RecycleBins/style";
import Background from "../../components/Container";
import Card from "../../components/Card";
import DisposalIncorrect from "./components/DisposalIncorrect";
import Friends from "./components/Friends";
import Justice from "./components/Justice";
import Recycling from "./components/Recycling";
import { ModalContent, ModalView } from "./style";

interface HomeProps {}

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
];

const renderContent = (key: number) => {
  switch (key) {
    case 1:
      return <DisposalIncorrect />;
    case 2:
      return <Friends />;
    case 3:
      return <Justice />;
    case 4:
      return <Recycling />;

    default:
      return (
        <View style={{ flex: 1 }}>
          <Text fontSize="24px" color="white">
            Localização
          </Text>
          <Text fontSize="12px" color="white">
            Veja os locais de descarte mais próximos a você
          </Text>

          <MapView
            style={{ width: "auto", height: "80%", marginTop: 20 }}
            initialRegion={{
              latitude: -23.5505,
              longitude: -46.6333,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
      );
  }
};

const Home: React.FC<HomeProps> = () => {
  const [key, setKey] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Background>
      <Container p={25} mTop={35}>
        {renderContent(key)}

        <View>
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
                onPress={() =>
                  card.value === 5 ? setModalVisible(true) : setKey(card.value)
                }
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
