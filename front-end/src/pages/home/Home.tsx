import React from "react";
import "./Home.css";
import Categories from "./components/Categories";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="container">
      <div className="topContainer">
        <Categories />
      </div>
      <div className="bottomContainer">
        <div className="rightContainer">
          <div className="topRightContainer"></div>
          <div className="bottomRightContainer"></div>
        </div>
        <div className="leftContainer">
          <div className="topLeftContainer"></div>
          <div className="bottomLeftContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
