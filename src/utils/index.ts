interface IPosition {
  lat: number;
  lng: number;
}

export const getDistanceFromLatLonInK = (
  position1: IPosition,
  position2: IPosition
) => {
  var deg2rad = function (deg: number) {
      return deg * (Math.PI / 180);
    },
    R = 6371,
    dLat = deg2rad(position2.lat - position1.lat),
    dLng = deg2rad(position2.lng - position1.lng),
    a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(position1.lat)) *
        Math.cos(deg2rad(position1.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2),
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c * 1000).toFixed();
};

export const calculateDistanceBetweenTwoCoordinates = (
  position1: IPosition,
  position2: IPosition
) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(position2.lat - position1.lat); // deg2rad below
  const dLon = deg2rad(position2.lng - position1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(position1.lat)) *
      Math.cos(deg2rad(position2.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}
