import { useEffect } from "react";

type MarkerPropsType = {
  map: naver.maps.Map;
  coordinates: naver.maps.LatLng;
  onClick: () => void;
};

const Marker = ({ map, coordinates, onClick }: MarkerPropsType): null => {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    if (map) {
      /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Marker.html */
      marker = new naver.maps.Marker({
        map: map,
        position: coordinates,
      });
    }

    if (onClick) {
      naver.maps.Event.addListener(marker, "click", onClick);
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default Marker;
