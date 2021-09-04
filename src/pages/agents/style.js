import styled from "styled-components";

export const StyledAgent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0 0;
  align-items: center;
  .comments {
    & input {
      visible: false;
      background: transparent;
      border-width: 0px;
      padding: 0px;

      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
      font-family: inherit;
      overflow: hidden;
      outline: none;
      width: 100%;
    }
    & :focus {
      border-color: white;
    }
  }
  .search-input {
    & input {
      width: 100%;
    }
  }
`;
export const RowLayout = styled.div`
  display: flex;
  width: 90%;
  padding: 0 20px 0 27px;
  border-radius: 23px;
  border: 0.1px solid;
  border-color: #bac2c7;
  flex-direction: row;
  min-height: 5vh;
  align-items: center;
  & input {
    visible: false;
    padding: 0px;

    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    font-family: inherit;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  border: transparent;
  color: #B2B2B2;
  font-color: #B2B2B2;
  font-size: 12px;
  border-width: 0px;
  visible: false;
  background: transparent;
  padding: 0 14.15px 0 14.15px;
  disabled
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-family: inherit;
  outline: none;
  width: 100%;
  & :focus {
    border-color: white;
  }
`;
export const RowContiner = styled.div`
   {
    display: flex;
    width: 100%;
    border-radius: 5px;
    border: 0.1px solid;
    border-color: #bac2c7;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & input {
      visible: false;
      padding: 0px;
      disabled
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
      font-family: inherit;
      overflow: hidden;
      width: 100%;
    }
  }
`;
export const MessageDiv = styled.div`
   {
    width: 100%;
  }
`;

export const SelectLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
