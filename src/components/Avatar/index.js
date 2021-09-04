import React from "react";
import styled from "styled-components";
import { FlexLayout, Text } from "../styles";
import avatar from "../../assets/img/svgs/19-Agents/details/Agent face/ToyFaces_Colored_BG_8.jpg";
const SellerCellArea = styled.div`
  display: flex;
  flex-direction: row nowrap;
  & .imgContainer {
    width: 30px;
    height: 30px;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    & .badge {
      position: absolute;
      right: -7px;
      top: 0px;
      z-index: 10;
      width: 9px;
      height: 9px;
      background: #20bb65;
      border-radius: 100%;
      border: 2px solid #ecebec;
    }
    & img {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      justify-content: center;
    }
  }
`;
export const Avatar = () => {
  return (
    <FlexLayout direction="column">
      <SellerCellArea>
        <div className="imgContainer">
          <img src={avatar} alt="NFT" />
          <div className="badge"></div>
        </div>
      </SellerCellArea>
      <Text fontSize="7px">Agent Name</Text>
    </FlexLayout>
  );
};
