import Map from "../components/Map";
import FoodTypeButton from "../components/FoodTypeButton";
import styled from "styled-components";
import ListContainer from "../components/ListContainer";
import Loading from "../components/Loading";
import { useFetchShop } from "../store/useFetchShop";

const MainPage = () => {
  const { status } = useFetchShop();

  if (status === "Loading") {
    return <Loading />;
  }

  return (
    <AppContainer>
      <ListContainer />
      <MapContainer>
        <Map />
        <FoodTypeButton />
      </MapContainer>
    </AppContainer>
  );
};

export default MainPage;

const AppContainer = styled.div`
  display: flex;
`;

const MapContainer = styled.div`
  height: 100vh;
  width: 80vw;
  position: relative;
`;
