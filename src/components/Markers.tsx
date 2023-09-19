import { useCurrentShop } from "../store/useCurrentShop";
import { useFetchShop } from "../store/useFetchShop";
import { useLocationInfo } from "../store/useLocationInfo";
import { useMap } from "../store/useMap";
import Marker from "./Marker";

const Markers = () => {
  const { shops } = useFetchShop();
  const { updateCurrentShop } = useCurrentShop();
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
              onClick={() => {
                updateCurrentShop({
                  shopBsType: store.shopBsType,
                  shopName: store.shopName,
                  shopRoadAddr: store.shopRoadAddr,
                });
              }}
              key={store.shopId}
            />
          );
        })}
    </>
  );
};

export default Markers;
