import { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useSearchResult } from "../store/useSearchResult";

interface PropsType {
  isLoading: boolean;
}

const Search = ({ isLoading }: PropsType) => {
  const [shopName, setShopName] = useState<string>("");
  const { setResult } = useSearchResult();

  const handleShopNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShopName(e.currentTarget.value);
  };

  const handleSearchSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    //빈창으로 검색할 경우 전체 List 보여줌
    if (shopName === "") {
      setResult("");
      return;
    }
    setResult(shopName);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <InputContainer>
        <StyledButton type="submit" title="검색">
          <BiSearch size="20px" color="#217af4" />
        </StyledButton>
        <StyledTextInput
          type="text"
          onChange={handleShopNameChange}
          placeholder="찾고 싶은 가게명"
          disabled={isLoading}
        />
      </InputContainer>
    </form>
  );
};

export default Search;

const InputContainer = styled.div`
  border: 1px solid #217af4;
  border-radius: 5px;
  margin: 0 15px;
  display: flex;
`;

const StyledTextInput = styled.input`
  height: 42px;
  width: 100%;
  font-size: 16px;
  border: 0;
  outline: none;
  border-radius: 6px;

  &:focus {
    border: none;
  }
`;

const StyledButton = styled.button`
  width: 64px;
  padding: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0);
`;
