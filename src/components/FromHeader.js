import React from "react";
import "./FromHeader.css";
import FirstFrom from "./FirstFrom";

const FromHeader = () => {
  return (
    <div className="all-body-crl">
      <div className="hed-div">
        <h2 className="hed-h2">Add Listing</h2>
      </div>
      <div className="btn-div-main">
        <div className="btn-second-first">
          <a className="a-one">1</a>
        </div>
        <div className="btn-second">
          <a>2</a>
        </div>
        <div className="btn-second">
          <a>3</a>
        </div>
        <div className="btn-second">
          <a>4</a>
        </div>
        <div className="btn-second">
          <a>5</a>
        </div>
      </div>
      <FirstFrom />
    </div>
  );
};

export default FromHeader;
