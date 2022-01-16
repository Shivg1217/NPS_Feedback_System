import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Success.css";
import SuccessImg from "../Assets/success_img.jpg";
import LogoImg from "../Assets/centerpoint_logo.png";
import PrevIcon from "../Icons/PrevIcon";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const toggleContent = [
  {
      SummaryText: "Summary",
      SuccessText: "Success!",
      BodyText: "Thanks for your valuable feedback.",
      CloseText: "Close"
  },
  {
      SummaryText: "ملخص",
      SuccessText: "النجاح!",
      BodyText: "شكرا لتواصلك معنا.",
      CloseText: "قريب"
  },
];

const Success = () => {
  const [contentText, setContentText] = useState(0); 

  const contentChangeHandler = () => {
      if (contentText === 0)
      {
          setContentText(contentText + 1)
      } else {
        setContentText(contentText - 1);
      }
  }
  return (
    <div>
      <div className="CneterPointBox">
      <div className="prevButton">
      <Link to="/contact" style={{color: "#000"}}>
        <PrevIcon />
      </Link>
      </div>
      <div className="CenterPointLogo">
        <img src={LogoImg} alt="logo" />
      </div>
      <div onClick={contentChangeHandler}>
          <ToggleSwitch label="abc" />
        </div>
    </div>
      <div className="menuBar">
        <div className="feedbackText">
          <p>{toggleContent[contentText].SummaryText}</p>
        </div>
        <div className="ImgSuccess">
          <img src={SuccessImg} alt="success" />
          <p className="successText">{toggleContent[contentText].SuccessText}</p>
        </div>
        <div className="DesText">
          <p>{toggleContent[contentText].BodyText}</p>
        </div>
        <Link to="/" className="SuccessButton">
          <Button className="btn CloseButton">{toggleContent[contentText].CloseText}</Button>
        </Link>
      </div>
    </div>
  );
};
export default Success;
