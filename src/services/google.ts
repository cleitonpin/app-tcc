const decode = (t: any, e?: any) => {
  for (
    var n,
      o,
      u = 0,
      l = 0,
      r = 0,
      d = [],
      h = 0,
      i = 0,
      a = null,
      c = Math.pow(10, e || 5);
    u < t.length;

  ) {
    (a = null), (h = 0), (i = 0);
    do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
    while (a >= 32);
    (n = 1 & i ? ~(i >> 1) : i >> 1), (h = i = 0);
    do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
    while (a >= 32);
    (o = 1 & i ? ~(i >> 1) : i >> 1),
      (l += n),
      (r += o),
      d.push([l / c, r / c]);
  }
  return (d = d.map(function (t) {
    return { latitude: t[0], longitude: t[1] };
  }));
};
// transforms something like this geocFltrhVvDsEtA}ApSsVrDaEvAcBSYOS_@... to an array of coordinates

const GOOGLE_API_KEY = "AIzaSyDTzZPR-zzATP1d_odo0S2urNZCP3HlfnY";

export const fetchRoute = async (
  origin: string,
  destination: string,
  mode?: string
) => {
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${GOOGLE_API_KEY}&mode${
    mode || "driving"
  }`;
  const response = await fetch(url);
  const json = await response.json();

  const points = decode(json.routes[0].overview_polyline.points);

  return {
    data: json,
    points,
  };
};
