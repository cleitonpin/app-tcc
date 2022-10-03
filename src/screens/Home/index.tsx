import Background from "../../components/Container";
import { Text } from "../../global/styles/Text";
import { Container } from "../RecycleBins/style";
import { Image, View } from "react-native"
import Card from "../../components/Card";
import { ScrollView, StyleSheet } from "react-native"

interface HomeProps { }

const CARDS = [
  {
    title: "Descarte Incorreto"
  },
  {
    title: "Amigos do meio ambiente"
  },
  {
    title: "Conheça seus direitos"
  },
  {
    title: "Reciclagem"
  },
  {
    title: "Logística reversa"
  },
]

const Home: React.FC<HomeProps> = () => {
  return (
    <Background>
      <Container p={25} mTop={35}>
        <Text fontSize="24px" color="white">Localização</Text>
        <Text fontSize="12px" color="white">Veja os locais de descarte mais próximos a você</Text>

        {/* MAP VIEW */}
        <Image source={require("../../assets/Map.png")} style={{ width: 300, height: 400, marginTop: 20 }}/>
        {/* MAP VIEW */}

        <Text fontSize="24px" color="white" style={{ marginTop: 10 }}>Curiosidades</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          {CARDS.map((card, index) => (
            <Card key={index} title={card.title} />
          ))}
        </ScrollView>
      </Container>
    </Background>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 10,
  }
})

export default Home;