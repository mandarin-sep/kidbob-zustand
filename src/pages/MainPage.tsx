import Map from "../components/Map";
import LocationSelector from "../components/LocationSelector";
import FoodTypeButton from "../components/FoodTypeButton";

const MainPage = () => {
  return (
    <>
      <Map />
      <LocationSelector />
      <FoodTypeButton />
    </>
  );
};

export default MainPage;
