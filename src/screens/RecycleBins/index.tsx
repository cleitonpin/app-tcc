import { ScrollView, View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { Picker as SelectPicker } from "@react-native-picker/picker";
import { FranchiseData, getFranchises } from "../../services/franchises";
import { franchises } from "../../mocks/franchises";
import { calculateDistanceBetweenTwoCoordinates } from "../../utils";

import { Text } from "../../global/styles";
import Background from "../../components/Container";
import Ecopoint from "../../components/Ecopoint";
import useGetLocation from "../../hooks/useGetLocation";

import { Container, Header, HeaderTitle, PickerWrapper } from "./style";
import { Loader } from "../../components/Loader";
import { fetchRoute } from "../../services/google";

interface RecycleBinsProps {}

const RecycleBins: React.FC<RecycleBinsProps> = () => {
  const location = useGetLocation();

  const [ecopoints, setEcopoints] = useState<FranchiseData>();
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("closest");

  const fetchEcopoints = async () => {
    setLoading(true);
    // const franchisesApi = await getFranchises();

    if (!location) return;

    const data = franchises.franchises
      .map((ecopoint) => {
        const coords = {
          myLocation: {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          },
          ecopointLocation: {
            lat: ecopoint.latitude,
            lng: ecopoint.longitude,
          },
        };

        // const coordinates = await fetchRoute(
        //   `${location?.coords.latitude}, ${location?.coords.longitude}`,
        //   `${ecopoint.latitude}, ${ecopoint.longitude}`
        // );

        // console.log(coordinates.data.routes[0].legs[0].distance.text);

        const distance = calculateDistanceBetweenTwoCoordinates(
          coords.myLocation,
          coords.ecopointLocation
        );

        return {
          ...ecopoint,
          distance,
        };
      })
      .sort((a, b) => a.distance - b.distance);
    // .sort((a, b) =>
    //   selectedFilter === "name-asc"
    //     ? a.companyName.localeCompare(b.companyName)
    //     : a.distance - b.distance
    // );

    setEcopoints({ franchises: data });
    setLoading(false);
  };

  useEffect(() => {
    fetchEcopoints();
  }, [selectedFilter, location]);

  return (
    <Background>
      <Container p={25} mTop={50}>
        <Header>
          <HeaderTitle>
            <Text fontSize="24px" color="white">
              Ecopontos
            </Text>
            <Text fontSize="12px" color="white">
              Locais
            </Text>
          </HeaderTitle>

          {/* <PickerWrapper>
            <Text fontSize="12px" color="white">
              Filtrar por:
            </Text>
            <View
              style={{
                borderWidth: 1.5,
                borderColor: "#EDF6F9",
                borderRadius: 4,
              }}
            >
              <SelectPicker
                selectedValue={selectedFilter}
                style={{
                  width: 170,
                  backgroundColor: "#EDF6F9",
                  justifyContent: "center",
                }}
                itemStyle={{
                  marginLeft: 30,
                }}
                onValueChange={(itemValue) => setSelectedFilter(itemValue)}
              >
                <SelectPicker.Item
                  label="Mais próximos"
                  value="closest"
                  style={{ fontSize: 14 }}
                />
                <SelectPicker.Item
                  label="Alfabetica"
                  value="name-asc"
                  style={{ fontSize: 14 }}
                />
              </SelectPicker>
            </View>
          </PickerWrapper> */}
        </Header>

        {loading || !location ? (
          <Loader />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {ecopoints?.franchises.map((ecopoint, index) => (
              <Ecopoint
                key={index}
                name={ecopoint.companyName}
                address={ecopoint.street}
                lat={ecopoint.latitude}
                long={ecopoint.longitude}
                distance={ecopoint.distance || 0}
              />
            ))}
          </ScrollView>
        )}
      </Container>
    </Background>
  );
};

export default RecycleBins;
