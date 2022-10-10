import { View, Image as Img, StyleSheet } from "react-native"
import styled from "styled-components/native"
import { Text, Image } from "../../../../global/styles"

const Box = styled.View`
  height: 92px;
  background-color: #628ec9;
  border-radius: 6px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const Container = styled.View`
  margin-top: 10px;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`

const Friends: React.FC<any> = () => {
  return (
    <Container>
      <Text         
        textAlign="center" 
        fontSize="18px" 
        color="white"
        fontWeight="bold"
        style={{ lineHeight: 18 }}
      >
        Faça aqui o marketing verde. Seja uma empresa amiga do meio ambiente
      </Text>

      {/* <Image  style={{ marginTop: 20 }} source={require("../../../../assets/pills.png")} /> */}

      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <Img  style={{ marginTop: 20 }} source={require("../../../../assets/pills.png")} />
      </View>

      <Box>
        <Text textAlign="center" color="white">
          Aquelas que recebem os medicamentos 
          vencidos ou em desuso da população. 
        </Text>
      </Box>
    </Container>
  )
}

const style = StyleSheet.create({
  image: {
    margin: 10,
  }
})

export default Friends