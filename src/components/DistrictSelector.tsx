import styled from "styled-components";
import DistrictData from "../assets/District.json";

type DistrictPropsType = {
  location: string;
  setDivision: React.Dispatch<React.SetStateAction<string>>;
};

const DistrictSelector = ({ location, setDivision }: DistrictPropsType) => {
  const district: { [key: string]: string[] } = DistrictData;
  if (!district[location]) return <></>;
  return (
    <StyledSelect onChange={(e) => setDivision(e.target.value)}>
      {district[location].map((item) => {
        return (
          <option value={item} key={item}>
            {item}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default DistrictSelector;

const StyledSelect = styled.select`
  width: 30%;
  height: 100%;
  font-size: 1.6vh;
  margin-right: 4px;
  border-radius: 4px;
`;
