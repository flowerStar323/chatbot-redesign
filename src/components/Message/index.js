import React from "react";
import styled from "styled-components";
import { FlexLayout, Text } from "../styles";
import avatar from "../../assets/img/svgs/19-Agents/details/Agent face/ToyFaces_Colored_BG_8.jpg";
export const SellerCellArea = styled.div`
  display: flex;
  flex-direction: row nowrap;
  & .imgContainer {
    width: 23.3px;
    height: 23.3px;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    & .badge {
      position: absolute;
      right: -4px;
      bottom: -4px;

      width: 9px;
      height: 9px;
      background: #20bb65;
      border-radius: 100%;
      border: 2px solid #ecebec;
    }
    & img {
      width: 23.3px;
      height: 23.3px;
      border-radius: 100%;
      justify-content: center;
    }
  }
`;
export const Message = ({ data }) => {
  return (
    <>
      {data.to === "me" ? (
        <FlexLayout margin="0 0 10.96px 0" width="100%">
          <FlexLayout
            align="flex-end"
            width="100%"
            justify="flex-end"
            wrap="nowrap"
          >
            <FlexLayout
              borderRadius="9px 9px 0px 9px"
              backgroundColor="white"
              padding="10px 13.59px 10px 14px"
              margin="0 8.61px 0 0 "
              wrap="nowrap"
            >
              <Text
                color="#5C6479"
                fontSize="14px"
                maxWidth="200px"
                fontWeight="400"
                overflowWrap="break-word"
              >
                {data.content}
              </Text>
            </FlexLayout>
            <SellerCellArea>
              <div className="imgContainer">
                <img src={data.src} alt="NFT" />
                <div className="badge"></div>
              </div>
            </SellerCellArea>
          </FlexLayout>
        </FlexLayout>
      ) : (
        <FlexLayout margin="0 0 10.96px 0" justify="flex-start">
          <FlexLayout align="flex-end">
            <SellerCellArea>
              <div className="imgContainer">
                <img src={avatar} alt="avatar" />
                <div className="badge"></div>
              </div>
            </SellerCellArea>
            <FlexLayout
              borderRadius="9px 9px 9px 0px"
              backgroundColor="#5C6479"
              margin="0 0 0 8.61px"
              padding="10px 13.59px 10px 14px"
            >
              <Text
                color="#FFFFFF"
                fontSize="14px"
                maxWidth="200px"
                fontWeight="400"
                overflowWrap="break-word"
              >
                {data.content}
              </Text>
            </FlexLayout>
          </FlexLayout>
        </FlexLayout>
      )}
    </>
  );
};
