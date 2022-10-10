import { Box, Content } from "./style"
import { Image, View, ImageSourcePropType } from "react-native"
import { Text } from "../../../../global/styles";

interface PlaceProps {
  source: ImageSourcePropType;
  title: string;
  description: string;
}

const Place = ({ source, title, description }: PlaceProps) => {
  return (
    <Box>
    <Content>
      <Image source={source} />
      <View>
        <Text fontSize="11px" width="35%" textAlign="center" color="#000000" fontWeight="bold">{title}</Text>
        <Text fontSize="11px" width="35%" textAlign="center" style={{ marginTop: 10 }}>{description}</Text>
      </View>
    </Content>
  </Box>
  )
}

export default Place