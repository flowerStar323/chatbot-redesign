import styled from "styled-components";

export const NotificationBoxContainer = styled.div`
  /* max-width: 900px; */
  /* width: 70%; */
  max-width: 70vw;
  width: 70vw;
  background-color: white;
  max-height: 23vh;
  height: 30vh;
  display: flex;
  box-shadow: 0px 0px 36px #67656514;
  border-radius: 20px;
  overflow: hidden;
  margin: 1rem auto;
`;
export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
  justify-content: space-between;
  flex: 1;
  padding: 1rem;
  width: 70%;
`;

export const GreetingsContainer = styled.div`
  font-weight: 700;
  font-size: 3vh;
  margin-top: 1rem;
`;
export const SubHeading = styled.div`
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
  height: 100%;
  background-color: black;
  width: 45px;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  /* padding: 0.49rem 1rem; */
  /* margin: 0.9rem 0; */
  position: relative;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* top: 15px; */
`;
