import { Text } from "../../global/styles";
import { Box, Rectangle, TextsContainer } from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface EcopointProps {
  name: string;
  address: string;
  lat: number;
  long: number;
}

export default function Ecopoint({ name, address, lat, long }: EcopointProps) {
  const navigation = useNavigation<any>();

  const handleNavigateToMap = () => {
    navigation.navigate("Map", { lat, long, name });
  };

  return (
    <Rectangle>
      <Box>
        <TextsContainer>
          <Text color="#2C79C1">{name}</Text>
          <Text fontSize="12px" color="#62B8F6">
            {address}
          </Text>
        </TextsContainer>

        <TouchableOpacity onPress={handleNavigateToMap} activeOpacity={0.5}>
          <Entypo name="location" size={20} color="#2C79C1" />
        </TouchableOpacity>
      </Box>
    </Rectangle>
  );
}
