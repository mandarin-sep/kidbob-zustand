import { useFetchShop } from "../store/useFetchShop";
import { useLocationInfo } from "../store/useLocationInfo";
import { useMap } from "../store/useMap";
import Marker from "./Marker";

const Markers = () => {
  const { shops } = useFetchShop();
  const { division } = useLocationInfo();
  const { map } = useMap();

  if (!shops || !map) return null;
  return (
    <>
      {shops
        .filter((item) => item.shopAddr.split(" ")[0] === division)
        .map((store) => {
          return (
            <Marker
              map={map}
              coordinates={
                new window.naver.maps.LatLng(store.shopLat, store.shopLon)
              }
              shopData={{
                shopId: store.shopId,
                shopName: store.shopName,
                shopBsType: store.shopBsType,
                shopRoadAddr: store.shopRoadAddr,
              }}
              key={store.shopId}
            />
          );
        })}
    </>
  );
};

export default Markers;
