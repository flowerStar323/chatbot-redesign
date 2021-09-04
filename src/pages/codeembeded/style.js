import styled from "styled-components";

export const CodeParentContainer = styled.div`
  background-color: white;
  border: 1px solid #8f9bb9;
  /* min-height: 500px; */
  height: 100%;
  width: 80%;
  border-radius: 0px 0px 9px 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  max-width: 870px;
  width: 100%;
`;

export const CodeHeaderContainer = styled.div`
  border: 1px solid #8f9bb9;
  border-radius: 9px 9px 0px 0px;
  display: flex;
  height: 50px;
  width: 90%;
`;

export const CodeHeader = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-right: 1px solid #8f9bb9;
  cursor: pointer;
`;
export const InActiveCodeHeader = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-right: 1px solid #8f9bb9;
  background-color: #bdbad4;
  color: white;
  cursor: pointer;
`;

export const CodeContainer = styled.div`
  background-color: white;
  border: 1px solid #8f9bb9;
  width: 90%;
  height: 300px;
  /* width: 75%; */
  border-radius: 0px 0px 9px 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
