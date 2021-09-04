import styled from "styled-components";
export const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
`;
export const SideBar = styled.div`
  .side-bar {
    box-shadow: -23px 0px 93px #0000001a;
    height: 100vh;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.div`
  width: 100%;
  gap: 10px;
  justify-content: flex-start;
  margin: 2.5vh 0 0 0;
  cursor: pointer;
`;
