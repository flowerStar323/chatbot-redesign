import React, { useState, useEffect, useRef } from "react";
import theme from "../../theme";

import styled from "styled-components";

const StyledDropDown = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  /* z-index: 10; */
  // margin: 0.5rem 0;

  justify-content: center;
`;
const StyledDropDownDiv = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 500;
  color: #202945;
  padding: 16px 0;
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
  font: italic;
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

const StyledDropDownItemDiv = styled.div`
  margin: 0 12px;
  padding: 8px 12px;
  text-align: left;
  font-size: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  img {
    height: 28px;
    margin-right: 12px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .check-mark {
    display: ${(props) => (props.isSelect ? "inline" : "none")};
    margin-bottom: 6px;
    transform: rotate(45deg);
    height: 12px;
    width: 8px;
    border-bottom: 2px solid ${theme.textBlue};
    border-right: 2px solid ${theme.textBlue};
  }
`;

const StyledDropDownDisableItemDiv = styled.div`
  color: ${theme.textGray};
  margin: 0 12px;
  padding: 10px 12px;
  text-align: left;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  img {
    height: 28px;
    margin-right: 12px;
  }
`;

const DropdownMenu = ({ list, click, radius, children, left, top }) => {
  const [current, setCurrent] = useState({});
  const [hide, setHide] = useState(false);
  const dropMenuRef = useRef(null);

  useEffect(() => {
    setCurrent(list[0]);
  }, [list]);

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
        {list.map((item, index) => {
          return item.type === "label" ? (
            <StyledDropDownDisableItemDiv key={`__key-${index.toString()}`}>
              {item.label}
            </StyledDropDownDisableItemDiv>
          ) : (
            <StyledDropDownItemDiv
              isSelect={current.id === item.id}
              key={`__key-${index.toString()}`}
              onClick={() => {
                setHide(false);
                setCurrent(item);
                click(item);
              }}
            >
              {item.label}
              {/* <span className="check-mark"></span> */}
            </StyledDropDownItemDiv>
          );
        })}
      </StyledDropDownDiv>
    </StyledDropDown>
  );
};

export default DropdownMenu;
