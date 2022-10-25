import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { FranchiseData, getFranchises } from "../../services/franchises";
import { useNavigation } from "@react-navigation/native";
import { franchises } from "../../mocks/franchises";
import useGetLocation from "../../hooks/useGetLocation";
import { fetchRoute } from "../../services/google";

const Map: React.FC<any> = ({ route }) => {
  const location = useGetLocation();
  const [ecopoints, setEcopoints] = useState<FranchiseData>(franchises);
  const [routeCoordinates, setRouteCoordinates] = useState<any>([]);

  const waitLocation = async () => {
    const coordinates = await fetchRoute(
      `${location?.coords.latitude}, ${location?.coords.longitude}`,
      `${route?.params?.lat}, ${route?.params?.long}`
    );

    setRouteCoordinates(coordinates.points);
  };

  useEffect(() => {
    if (!location) return;

    waitLocation();
  }, [location]);

  return (
    <View>
      {location && (
        <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: route?.params?.lat ?? location.coords.latitude,
            longitude: route?.params?.long ?? location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {!route.params ? (
            ecopoints?.franchises.map((ecopoint, index) => (
              <Marker
                draggable
                key={index}
                coordinate={{
                  latitude: ecopoint.latitude,
                  longitude: ecopoint.longitude,
                }}
                title={ecopoint.companyName}
                description={"franqffuia"}
              />
            ))
          ) : (
            <>
              <Polyline coordinates={[...routeCoordinates]} strokeWidth={4} />
              <Marker
                coordinate={{
                  latitude: route.params.lat,
                  longitude: route.params.long,
                }}
                title={route.params.name}
                description={"franquia"}
              />
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                title={"Você"}
                description={"Sua localização"}
              />
            </>
          )}
        </MapView>
      )}
    </View>
  );
};

export default Map;
