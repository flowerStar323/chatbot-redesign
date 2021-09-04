import React from "react";
import Sidebar from "./Sidebar";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import { MainWrapper } from "./style";

const MainLayout = ({ children }) => {
  return (
    <MainWrapper>
      <Sidebar />
      <div style={{ width: "100%", background: "#F7F8F8 0% 0% no-repeat padding-box" }}>{children}</div>
    </MainWrapper>
  );
};

// #F7F8F8

// const mapStateToProps = ({ menu }) => {
//   const { containerClassnames } = menu;
//   return { containerClassnames };
// };
// const mapActionToProps = {};

// export default withRouter(
//   connect(mapStateToProps, mapActionToProps)(MainLayout)
// );
export default MainLayout;
