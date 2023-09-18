import styled from "styled-components";
import List from "../components/List";
import LocationSelector from "./LocationSelector";

export default function ListContainer() {
  return (
    <StyledContainer>
      <ZoneSelectorContainer>
        <LocationSelector />
      </ZoneSelectorContainer>
      <List />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 23vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ZoneSelectorContainer = styled.div`
  margin: 8px 15px;
  height: 3vh;
`;
