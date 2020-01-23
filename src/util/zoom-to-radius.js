export const MAX_RADIUS = 50000;
// google places has a maximium radius of 50000
export const MIN_RADIUS = 1128.497220;

// source http://webhelp.esri.com/arcgisserver/9.3/java/index.htm#designing_overlay_gm_mve.htm
const zoomToRadiusMap = {
  20 : MIN_RADIUS,
  19 : 2256.994440,
  18 : 4513.988880,
  17 : 9027.977761,
  16 : 18055.955520,
  15 : 36111.911040,
  14 : MAX_RADIUS,
}

export const zoomToRadius = (zoom) => {
  const distance = zoomToRadiusMap[zoom];
  if (distance){
    return zoomToRadiusMap[zoom];
  };
  if (zoom > 20) {
    return MIN_RADIUS;
  }
  if (zoom < 14){
    return MAX_RADIUS;
  }

};