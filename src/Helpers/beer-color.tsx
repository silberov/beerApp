import ColorScale from "color-scales";

const beerColorScaleEBC = new ColorScale(0, 80, [
  "#FFE699",
  "#FBB123",
  "#DE7C00",
  "#BB5100",
  "#9B3200",
  "#7B1A00",
  "#5A0A02",
  "#420607",
  "#000000",
]);

const beerColorCalc = (ebc: number) => {
  return beerColorScaleEBC.getColor(ebc).toHexString();
};


export default beerColorCalc;