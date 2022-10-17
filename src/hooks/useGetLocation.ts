import { useState, useEffect } from "react";
import * as Location from "expo-location";

const useGetLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  const handleLocation = async () => {
    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });

    setLocation(location);
  };

  useEffect(() => {
    handleLocation();
  }, []);

  return location;
};

export default useGetLocation;
