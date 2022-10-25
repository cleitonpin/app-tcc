import { LocationObject } from "expo-location";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Loader } from "../../../../components/Loader";
import { Text } from "../../../../global/styles";

interface DefaultPageProps {
  location: LocationObject | null;
}

export function DefaultPage({ location }: DefaultPageProps) {
  return (
    <View style={{ flex: 1 }}>
      <Text fontSize="24px" color="white">
        Localização
      </Text>
      <Text fontSize="12px" color="white">
        Veja os locais de descarte mais próximos a você
      </Text>

      {location ? (
        <MapView
          style={{ width: "auto", height: "80%", marginTop: 20 }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={"Você"}
            description={"Sua localização"}
          />
        </MapView>
      ) : (
        <Loader />
      )}
    </View>
  );
}
