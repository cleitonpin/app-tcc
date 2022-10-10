
import { Text } from "../../global/styles";
import { Box } from "./styles";
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { TouchableOpacity } from "react-native";

interface CardProps {
  title: string;
  onPress: () => void;
}

export default function Card({ title, onPress }: CardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Box>
        <Text fontSize="14px" color="#2C79C1" fontWeight={400}>{title}</Text>
        <EvilIcons name="trash" size={35} color="#2C79C1" style={{ position: 'absolute', right: 10, bottom: 10 }}/>
      </Box>
    </TouchableOpacity>
  );
}
