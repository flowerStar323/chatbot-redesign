import React, { useState, useEffect, useRef } from "react";
import theme from "../../theme";

import styled from "styled-components";
import { Avatar } from "../Avatar";
import { FlexLayout } from "../styles";

const StyledDropDown = styled.div`
  display: flex;
  position: relative;

  width: 100%;
`;
const StyledDropDownDiv = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 500;
  color: #202945;
  padding: 16px 0;
  flex-wrap: wrap;
  top: ${(props) => (props.top ? props.top : "50px")};
  left: ${(props) => (props.left ? props.left : "0px")};
  position: absolute;
  border-radius: 8px;
  background-color: ${theme.colorWhite};
  transform: scaleY(${(props) => (props.hide ? "1" : "0")});
  opacity: ${(props) => (props.hide === true ? "1" : "0")};
  transition: 0.7s ease;
  transform-origin: top center;
  border: 1px solid ${theme.transparentBorder};
  width: 100%;
  min-width: 150px;
  max-height: auto;
  box-shadow: 0px 6px 18px #00000029;
`;
const StyledDropDownHeader = styled.div`
  cursor: pointer;
  width: 100%;
  .arrow {
    transform: ${(props) =>
      props.hide === true ? "rotate(90deg)" : "rotate(0deg)"};
    transition: 0.5s ease;
  }
`;

const DropdownMenu = ({ list, width, radius, children, left, top, gap }) => {
  const [current, setCurrent] = useState({});
  const [hide, setHide] = useState(false);
  const dropMenuRef = useRef(null);

  console.log(current);
  useEffect(() => {
    setCurrent(list[0]);
  }, [list]);

  // const handleClickOutside = (e) => {
  //   if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
  //     return;
  //   }
  //   setHide(false);
  // };

  return (
    <StyledDropDown>
      <StyledDropDownHeader
        onClick={() => {
          setHide(!hide);
        }}
        hide={hide}
        radius={radius}
      >
        {children}
      </StyledDropDownHeader>
      <StyledDropDownDiv ref={dropMenuRef} hide={hide} left={left} top={top}>
        <FlexLayout
          gap={gap ? gap : "25px"}
          // width={width ? width : "100%"}
          justify="flex-start"
          padding="0 0 0 16px"
          width="fit-content"
        >
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </FlexLayout>
      </StyledDropDownDiv>
    </StyledDropDown>
  );
};

export default DropdownMenu;
