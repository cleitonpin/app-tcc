import { Text } from "../../../../global/styles"
import { View } from "react-native"
import Place from "./Place"


const DisposalIncorrect: React.FC<any> = () => {
  const placeImage = {
    privada: require(`../../../../assets/privada.png`),
    trash: require(`../../../../assets/trash.png`),
    sink: require(`../../../../assets/sink.png`)
  }

  return (
    <View style={{ flex: 1 }}>
      <Text 
        textAlign="center" 
        fontSize="24px" 
        color="white"
      >
        É incorreto descartar medicamentos em lugares como: 
      </Text>
      <Place 
        source={placeImage.privada}
        title="Vaso" 
        description="Os remédios têm substâncias que podem 
              contaminar o solo e a água e trazer riscos à 
              população e ao meio ambiente." 
        />
      <Place 
        source={placeImage.trash}
        title="Lixo comum"
        description="Os remédios têm substâncias que podem 
              contaminar o solo e a água e trazer riscos à 
              população e ao meio ambiente." 
        />
      <Place 
        source={placeImage.sink}
        title="Pia" 
        description="Os remédios têm subs" 
        />
    </View>
  )
}

export default DisposalIncorrect