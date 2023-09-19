import MapSection from "../components/MapSection";
import FoodTypeButton from "../components/FoodTypeButton";
import styled from "styled-components";
import ListContainer from "../components/ListContainer";

const MainPage = () => {
  return (
    <AppContainer>
      <ListContainer />
      <MapContainer>
        <MapSection />
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
