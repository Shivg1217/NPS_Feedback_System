import React, { useState } from "react";
import "./Centerpoint.css";
import "../TopBar/TopBar.css";
import PrevIcon from "../Icons/PrevIcon";
import { Link, useHistory } from "react-router-dom";
import LogoImg from "../Assets/centerpoint_logo.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const toggleContent = [
  {
      feedbackText: "Feedback",
      bodyText: "Based on your shopping exprience, how likely are you to recommend Centerpoint to a friend or colleague?",
      ratingText: "0 (least likely) to 10 (most likely)"
  },
  {
      feedbackText: "استجابة",
      bodyText: "بناءً على تجربة التسوق الخاصة بك ، ما مدى احتمالية أن توصي صديق أو زميل بسنتربوينت؟",
      ratingText: "من 0 (على الأرجح) إلى 10 (على الأرجح)"
  },
];

const Centerpoint = () => {
  let history = useHistory();

  const [contentText, setContentText] = useState(0); 

  const contentChangeHandler = () => {
      if (contentText === 0)
      {
          setContentText(contentText + 1)
      } else {
        setContentText(contentText - 1);
      }
  }

  const updateId0 = () => {
    history.push("/servicefeedback/0");
  };
  const updateId1 = () => {
    history.push("/servicefeedback/1");
  };
  const updateId2 = () => {
    history.push("/servicefeedback/2");
  };
  const updateId3 = () => {
    history.push("/servicefeedback/3");
  };
  const updateId4 = () => {
    history.push("/servicefeedback/4");
  };
  const updateId5 = () => {
    history.push("/servicefeedback/5");
  };
  const updateId6 = () => {
    history.push("/servicefeedback/6");
  };
  const updateId7 = () => {
    history.push("/servicefeedback/7");
  };
  const updateId8 = () => {
    history.push("/servicefeedback/8");
  };
  const updateId9 = () => {
    history.push("/servicefeedback/9");
  };
  const updateId10 = () => {
    history.push("/servicefeedback/10");
  };
  return (
    <>
      <div className="CneterPointBox">
        <div className="prevButton">
          <Link to="/" style={{color: "#000"}}>
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
          <p>{toggleContent[contentText].feedbackText}</p>
        </div>
        <div className="descBox">
          <div className="DesText">
            <p>
            {toggleContent[contentText].bodyText}
            </p>
          </div>
          <div className="ItemComment">
            <p className="text-muted">{toggleContent[contentText].ratingText}</p>
          </div>
          <div className="CircularItems">
            <button className="dotA" onClick={() => updateId0()}>
              0
            </button>
            <button className="dotA" onClick={() => updateId1()}>
              1
            </button>
            <button className="dotA" onClick={() => updateId2()}>
              2
            </button>
            <button className="dotA" onClick={() => updateId3()}>
              3
            </button>
            <button className="dotA" onClick={() => updateId4()}>
              4
            </button>
            <button className="dotA" onClick={() => updateId5()}>
              5
            </button>
            <button className="dotA" onClick={() => updateId6()}>
              6
            </button>
            <button className="dotB" onClick={() => updateId7()}>
              7
            </button>
            <button className="dotB" onClick={() => updateId8()}>
              8
            </button>
            <button className="dotC" onClick={() => updateId9()}>
              9
            </button>
            <button className="dotC" onClick={() => updateId10()}>
              10
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Centerpoint;
