import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { FranchiseData, getFranchises } from "../../services/franchises";
import { useNavigation } from "@react-navigation/native";
import { franchises } from "../../mocks/franchises";

const Map: React.FC<any> = ({ route }) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [ecopoints, setEcopoints] = useState<FranchiseData>();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      console.log("entrou");
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });

      // const response = await getFranchises();

      setEcopoints(franchises);
      // setLoading(false);
      setLocation(location);
    })();
  }, []);

  return (
    <View>
      {location && (
        <MapView
          style={{ width: "100%", height: "98%", marginTop: 20 }}
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
                key={index}
                coordinate={{
                  latitude: ecopoint.latitude,
                  longitude: ecopoint.longitude,
                }}
                title={ecopoint.companyName}
                description={"franquia"}
              />
            ))
          ) : (
            <Marker
              coordinate={{
                latitude: route.params.lat,
                longitude: route.params.long,
              }}
              title={route.params.name}
              description={"franquia"}
            />
          )}
        </MapView>
      )}
    </View>
  );
};

export default Map;
