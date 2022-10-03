import { Text } from "../../global/styles/Text";
import { Box, Rectangle, TextsContainer } from "./styles";
import Entypo from "react-native-vector-icons/Entypo"
import { TouchableOpacity } from "react-native";

interface EcopointProps {
  name: string;
  address: string;
}

export default function Ecopoint({ name, address }: EcopointProps) {
  return (
    <Rectangle>
      <Box>
        <TextsContainer>
          <Text color="#2C79C1">{name}</Text>
          <Text fontSize="12px" color="#62B8F6">{address}</Text>
        </TextsContainer>

        <TouchableOpacity onPress={() => console.log(Math.random())} activeOpacity={0.5}>
          <Entypo name="location" size={20} color="#2C79C1" />
        </TouchableOpacity>
      </Box>
    </Rectangle>
  );
}