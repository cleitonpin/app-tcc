
import { Text } from "../../global/styles/Text";
import { Box } from "./styles";
import EvilIcons from "react-native-vector-icons/EvilIcons"

interface CardProps {
  title: string;
}

export default function Card({ title }: CardProps) {
  return (
    <Box>
      <Text fontSize="14px" color="#2C79C1" fontWeight={400}>{title}</Text>
      <EvilIcons name="trash" size={35} color="#2C79C1" style={{ position: 'absolute', right: 10, bottom: 10 }}/>
    </Box>
  );
}
