import { useEffect } from "react";
import { useMap } from "../store/useMap";
import { useLocationInfo } from "../store/useLocationInfo";

const Map = () => {
  const { updateMap } = useMap();
  const { center } = useLocationInfo();
  useEffect(() => {
    if (!naver) return;

    const mapOption = {
      center: center,
      zoom: 16,
    };

    const map = new naver.maps.Map("map", mapOption);

    updateMap(map);
  }, [updateMap, center]);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100%" }} />
    </>
  );
};

export default Map;
