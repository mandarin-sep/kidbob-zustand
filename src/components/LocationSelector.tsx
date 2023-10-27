import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import latlng from "../../public/assets/LatLng.json";
import { useLocationInfo } from "../store/useLocationInfo";
import DistrictSelector from "./DistrictSelector";
import { useFetchShop } from "../store/useFetchShop";
import { useMap } from "../store/useMap";

const LocationSelector = () => {
  const [value, setValue] = useState("");
  const [division, setDivision] = useState("");
  const [validation, setValidation] = useState({
    isvalidate: true,
    message: "",
  });
  const navigate = useNavigate();
  const { updateDivision, updateShoptype, updateCenter } = useLocationInfo();
  const { map } = useMap();
  const { fetchShop } = useFetchShop();

  const handleDataFetch = () => {
    if (value === "") {
      setValidation({
        isvalidate: false,
        message: "찾길 원하는 행정구역을 선택해주세요",
      });
      return;
    }

    if (division.length === 0) {
      setValidation({ isvalidate: false, message: "동/읍/면을 선택하세요" });
      return;
    }

    //동/읍/면의 중심 좌표 설정할 함수
    const centerValue = latlng.filter((item) => {
      return item.sgg_nm === value && item.emd_nm === division;
    });
    const centerPosition = new window.naver.maps.LatLng(
      centerValue[0].center_lati,
      centerValue[0].center_long
    );
    fetchShop(value);
    map?.panTo(centerPosition);
    map?.setZoom(16);
    updateCenter(centerPosition);
    updateDivision(division);
    updateShoptype("");
    navigate("/main");
  };
  return (
    <>
      <Container>
        <StyledSelect
          name="area"
          id="area-select"
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="">찾고 싶은 행정구역을 선택해주세요</option>
          <option value="북구" id="BukGu">
            북구
          </option>
          <option value="중구" id="JungGu">
            중구
          </option>
          <option value="동구" id="DongGu">
            동구
          </option>
          <option value="서구" id="SeoGu">
            서구
          </option>
          <option value="수성구" id="SuSeongGu">
            수성구
          </option>
          <option value="남구" id="NamGu">
            남구
          </option>
          <option value="달서구" id="DalSeoGu">
            달서구
          </option>
          <option value="달성군" id="DalSungGun">
            달성군
          </option>
        </StyledSelect>
        <DistrictSelector location={value} setDivision={setDivision} />
        <StyledButton onClick={handleDataFetch}>찾아보기</StyledButton>
      </Container>
      {!validation.isvalidate && (
        <StyledError>{validation.message}</StyledError>
      )}
    </>
  );
};

export default LocationSelector;

const StyledSelect = styled.select`
  width: 75%;
  height: 100%;
  font-size: 1.6vh;
  margin-right: 4px;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  width: 20%;
  height: 100%;
  font-size: 1vh;
  padding: 2px;
  background-color: #69a0f0;
  color: #fff;
  text-align: center;
  box-sizing: border-box;

  transition: all 100ms ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledError = styled.div`
  width: 100%;
  font-size: 1.5vh;
  color: red;
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 700;
`;
