import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    if (!naver) return;

    const mapOption = {
      center: new window.naver.maps.LatLng(37.5262411, 126.99289439),
      zoom: 17,
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const map = new naver.maps.Map("map", mapOption);
  }, []);

  return <div id="map" style={{ width: "100%", height: "100%" }} />;
};

export default Map;
