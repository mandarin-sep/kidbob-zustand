import MapContainer from "../components/MapContainer";
import FoodTypeButton from "../components/FoodTypeButton";
import styled from "styled-components";
import ListContainer from "../components/ListContainer";

const MainPage = () => {
  return (
    <AppContainer>
      <ListContainer />
      <MapSection>
        <MapContainer />
        <FoodTypeButton />
      </MapSection>
    </AppContainer>
  );
};

export default MainPage;

const AppContainer = styled.div`
  display: flex;
`;

const MapSection = styled.div`
  height: 100vh;
  width: 80vw;
  position: relative;
`;
