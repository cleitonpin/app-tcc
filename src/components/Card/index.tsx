import { Text } from "../../global/styles";
import { Box } from "./styles";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";

interface CardProps {
  title: string;
  source: ImageSourcePropType;
  onPress: () => void;
}

export default function Card({ title, source, onPress }: CardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Box>
        <Text fontSize="14px" color="#2C79C1" fontWeight={400}>
          {title}
        </Text>
        <Image
          source={source}
          style={{
            position: "absolute",
            right: 10,
            bottom: 10,
            width: 35,
            height: 35,
          }}
        />
        {/* <EvilIcons name="trash" size={35} color="#2C79C1" style={{ position: 'absolute', right: 10, bottom: 10 }} /> */}
      </Box>
    </TouchableOpacity>
  );
}
