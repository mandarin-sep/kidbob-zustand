import { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import ListItem from "./ListItem";
import { useLocationInfo } from "../store/useLocationInfo";
import { listItem } from "../types/apiItem";
import { useFetchShop } from "../store/useFetchShop";
import Search from "./Search";

const List = () => {
  const { division, shoptype } = useLocationInfo();
  const { shops, status } = useFetchShop();
  const [shopList, setShopList] = useState<listItem[]>([]);
  const [filteredShopList, setFilteredShopList] = useState<listItem[]>([]);

  useEffect(() => {
    if (shops) {
      const filteredList = shops.filter(
        (item) => item.shopAddr.split(" ")[0] === division
      );
      setShopList(filteredList);
      setFilteredShopList(filteredList);
    }
  }, [division, shops]);

  useEffect(() => {
    if (shoptype !== "") {
      setShopList(
        filteredShopList.filter((shop) => shop.shopBsType === shoptype)
      );
    }

    if (shoptype === "all") setShopList(filteredShopList);
  }, [filteredShopList, shoptype]);

  if (status === "Loading" || !shops) {
    return <Loading />;
  }

  return (
    <>
      <Search shops={shops} />
      <StyledUl>
        {shopList.length === 0 ? (
          <StyledEmptyList>
            조건에 맞는 가게가 <br /> 없습니다.
          </StyledEmptyList>
        ) : (
          <></>
        )}
        {JSON.stringify(shopList) !== "{}" ? (
          shopList.map((item) => {
            return <ListItem item={item} key={item.shopId} />;
          })
        ) : (
          <Loading />
        )}
      </StyledUl>
    </>
  );
};

const StyledUl = styled.ul`
  overflow-y: scroll;
  height: 100%;
  white-space: nowrap;
  list-style: none;
  padding: 0;
  position: relative;
  overflow-x: hidden;
  margin: 0;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #c9dbf5;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const StyledEmptyList = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 800;
  font-size: 32px;
  color: #217af4;
`;

export default List;
