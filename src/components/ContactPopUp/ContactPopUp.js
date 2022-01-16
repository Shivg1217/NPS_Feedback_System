import React, { useState } from "react";
import "./ContactPopUp.css";
import RedeemImg from "../Assets/redeem_img.png";
import { Link } from "react-router-dom";
import PrevIcon from "../Icons/PrevIcon";
import LogoImg from "../Assets/centerpoint_logo.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const toggleContent = [
  {
    bodyText: "May we contact you to learn more about your experience?",
    yesText: "Yes",
    noText: "No",
  },
  {
    bodyText: "هل يمكننا الاتصال بك لمعرفة المزيد عن تجربتك؟",
    yesText: "نعم",
    noText: "لا",
  },
];

function ContactPopUp({ setOpenModal }) {
  const [contentText, setContentText] = useState(0);

  const contentChangeHandler = () => {
    if (contentText === 0) {
      setContentText(contentText + 1);
    } else {
      setContentText(contentText - 1);
    }
  };
  return (
    <>
      <div className="CneterPointBox">
        <div className="prevButton">
          <Link to="/servicefeedback/0" style={{ color: "#000" }}>
            <PrevIcon />
          </Link>
        </div>
        <div className="CenterPointLogo">
          <img src={LogoImg} alt="logo" />
        </div>
        <div>
          <div onClick={contentChangeHandler}>
            <ToggleSwitch label="abc" />
          </div>
        </div>
      </div>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="redeemImg">
            <img src={RedeemImg} alt="redeem " />
          </div>
          <div className="body">
            <p>{toggleContent[contentText].bodyText}</p>
          </div>
          <div className="footer">
            <Link to="/success">
              <button id="cancelBtn">
                {toggleContent[contentText].noText}
              </button>
            </Link>
            <Link to="/contact">
              <button id="cancelBtn">
                {toggleContent[contentText].yesText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPopUp;
