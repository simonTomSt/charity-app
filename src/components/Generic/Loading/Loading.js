import React from "react";
import "./Loading.scss";
import loadingIcon from "../../../assets/Icon-4.svg";
const Loading = () => {
  return (
    <div className="loading">
      {" "}
      <img src={loadingIcon} alt="ładuje" />
    </div>
  );
};

export default Loading;
