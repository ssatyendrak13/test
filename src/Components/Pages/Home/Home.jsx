import React from "react";
import "./Home.css";
import HiIcon from "../../../Assets/Hi.png";
import Sonali from "../../../Assets/Sonali.png";
import loveTree from "../../../Assets/loveTree.png";
const Home = () => {
  return (
    <div className="home">
      <div>
        {" "}
        <img src={HiIcon} alt="HiIcon" className="hi-icon" />
      </div>
      <div>
        <img src={Sonali} alt="Sonali" className="sonali-icon" />
      </div>
      <div>
        <img src={loveTree} alt="loveTree" className="love-tree" />
      </div>
    </div>
  );
};

export default Home;
