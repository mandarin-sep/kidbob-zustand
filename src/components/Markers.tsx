import { useCurrentShop } from "../store/useCurrentShop";
import { useFetchShop } from "../store/useFetchShop";

const Markers = () => {
  const { shops } = useFetchShop();
  const { updateCurrentShop } = useCurrentShop();

  if (!shops) return null;
  return (
    <>
      {shops.map((store) => {
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
