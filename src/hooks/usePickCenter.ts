import latlng from "../../public/assets/LatLng.json";

export const usePickCenter = (distrinct: string, division: string) => {
  const filteredData = latlng.filter((item) => {
    return item.sgg_nm === distrinct && item.emd_nm === division;
  });

  return [filteredData[0].center_lati, filteredData[0].center_long];
};
