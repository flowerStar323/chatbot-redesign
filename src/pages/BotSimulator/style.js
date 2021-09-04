import styled from "styled-components";

export const NotificationBoxContainer = styled.div`
  max-width: 870px;
  width: 100%;
  background-color: white;
  max-height: 140px;
  height: 100%;
  display: flex;
  box-shadow: 0px 0px 36px #67656514;
  border-radius: 20px;
  overflow: hidden;
  margin: 1rem auto;
`;
export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
`;

export const GreetingsContainer = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  margin-top: 1rem;
`;
export const SubHeading = styled.span`
  font-weight: 400;
  font-size: 0.85rem;
  color: #bac2c7;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SendButtonContainer = styled.div`
  height: 90%;
  background-color: black;
  width: 45px;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  padding: 0.6rem 1rem;
  margin: 1rem 0;
  position: relative;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 15px;
`;
