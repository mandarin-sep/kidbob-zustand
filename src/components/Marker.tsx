import { useEffect } from "react";
import { useMarker } from "../store/useMarker";
import shopType from "../utils/shopType";

type MarkerPropsType = {
  map: naver.maps.Map;
  coordinates: naver.maps.LatLng;
  shopData: {
    shopId: string;
    shopName: string;
    shopBsType: string;
    shopRoadAddr: string;
  };
};

const Marker = ({ map, coordinates, shopData }: MarkerPropsType): null => {
  const { addMarkers } = useMarker();

  const infoWindowString = `<div style="box-sizing: border-box; padding: 8px;">
  <div>
  <h3 style="font-weight: 700; color: #0068c3; margin: 0 6px 0 0; line-height: 14px; display: inline;">
  ${shopData.shopName} 
  </h3>
  <span style="color: #8f8f8f; font-size: 14px;">${shopType(
    shopData.shopBsType
  )}</span>
  </div>
  <div>${shopData.shopRoadAddr}</div>
  </div>
  `;

  const infoWindow = new naver.maps.InfoWindow({
    content: infoWindowString,
  });

  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    if (map) {
      marker = new naver.maps.Marker({
        map: map,
        position: coordinates,
      });

      addMarkers({ marker, id: Number(shopData.shopId) });
    }

    naver.maps.Event.addListener(marker, "click", () => {
      if (infoWindow.getMap()) {
        infoWindow.close();
      } else {
        infoWindow.open(map, marker!);
      }
    });

    naver.maps.Event.addListener(map, "click", () => {
      infoWindow.close();
    });
    return () => {
      marker?.setMap(null);
    };
  }, [map]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default Marker;
