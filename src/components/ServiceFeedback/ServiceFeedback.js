import React, { useState, useEffect } from "react";
import "./ServiceFeedback.css";
import { Accordion, Card } from "react-bootstrap";
import "../TopBar/TopBar.css";
import LogoImg from "../Assets/centerpoint_logo.png";
import PrevIcon from "../Icons/PrevIcon";
import UpIcon from "../Icons/UpIcon";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const toggleContent = [
  {
      feedbackText: "Feedback",
      bodyText: "What is one thing we could have done differently to improve your experience?",
  },
  {
      feedbackText: "استجابة",
      bodyText: "ما هو الشيء الوحيد الذي كان بإمكاننا القيام به بشكل مختلف لتحسين تجربتك؟"
  },
];

const ServiceFeedback = (props) => {
  const [ratingId] = useState(props.match);
  const [users, setUser] = useState([]);
  const [subUsers, setSubUser] = useState([]);
  // const [rotateButton, setRotateButton] = useState(false);
  // const [questionIdSelected, setQuestionIdSelected] = useState([]);
  // const [queIndex, setQueIndex] = useState(-1);

  const [contentText, setContentText] = useState(0); 

  const contentChangeHandler = () => {
      if (contentText === 0)
      {
          setContentText(contentText + 1)
      } else {
        setContentText(contentText - 1);
      }
  }

  useEffect(() => {
    console.log("ratingId", ratingId);
    if (contentText === 0) {
      ratingId?.params?.ratingId &&
      fetch(
        `http://10.160.100.120/customer-feedback-nps-api/v2/surveymgmt/getQuestionsByCategoryNameAndUserCategory/Store/${ratingId?.params?.ratingId}/Eng`
      )
        .then((response) => response.json())
        .then((json) => {
          setUser(json.data.questions);
          console.log(json.data.questions);
          // console.log(users)
        });
    } else {
      ratingId?.params?.ratingId &&
      fetch(
        `http://10.160.100.120/customer-feedback-nps-api/v2/surveymgmt/getQuestionsByCategoryNameAndUserCategory/Store/${ratingId?.params?.ratingId}/Arb`
      )
        .then((response) => response.json())
        .then((json) => {
          setUser(json.data.questions);
          console.log(json.data.questions);
          // console.log(users)
        });
    }
    
  }, [ratingId, contentText]);

  const subcategory = (id) => {
    if(contentText === 0){
      fetch(
        `http://10.160.100.120/customer-feedback-nps-api/v2/surveymgmt/getquestionsByParentId/${id}/Eng`
      )
        .then((response) => response.json())
        .then((json) => {
          setSubUser(json.data);
          console.log(json.data);
        });
    } 
    else {
      fetch(
        `http://10.160.100.120/customer-feedback-nps-api/v2/surveymgmt/getquestionsByParentId/${id}/Arb`
      )
        .then((response) => response.json())
        .then((json) => {
          setSubUser(json.data);
          console.log(json.data);
        });
    }
    
  };

  // const handleAdd = (data) => {
  //   console.log(data);
  //   let questionIdSelectedList = questionIdSelected;
  //   const index = questionIdSelectedList.findIndex(
  //     (i) => i === data.questionId
  //   );
  //   if (index === -1) {
  //     questionIdSelectedList.push(data.questionId);
  //   } else {
  //     questionIdSelectedList = questionIdSelectedList.filter(
  //       (i) => i !== data.questionId
  //     );
  //   }
  //   console.log("questionIdSelectedList", questionIdSelectedList);
  //   setQuestionIdSelected(questionIdSelectedList);
  //   setQueIndex(data.questionId);
  // };

  return (
    <>
      <div className="CneterPointBox">
        <div className="prevButton">
          <Link to="/centerpoint" style={{ color: "#000" }}>
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
      <div className="menuBar">
        <div className="feedbackText">
          <p>{toggleContent[contentText].feedbackText}</p>
        </div>
        <div className="DesText">
          <p>
          {toggleContent[contentText].bodyText}
          </p>
        </div>
        <Accordion>
          {users.map((i, index) => (
            <Card className="dropdownMenu">
              <Accordion.Toggle
                as={Card.Header}
                eventKey={i.questionId}
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                onClick={() => subcategory(i.questionId)}
              >
                <div className="UpIconBox">
                  <div className="UpIconText">{i.questionName}</div>
                  <div className="IconButton">
                    <UpIcon />
                  </div>
                </div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey={i.questionId}>
                <Card.Body>
                  <div className="buttonDropdown">
                    {subUsers.map((i, index) => (
                      <Link to="/contactPopup"
                      className="btn itemBotton"
                        // className={
                        //   questionIdSelected.findIndex(
                        //     (data) => data === i.questionId
                        //   ) !== -1
                        //     ? "btn itemBotton activeButton"
                        //     : "btn itemBotton"
                        // }
                      >
                        {i.questionName}
                      </Link>
                
                    ))}
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </div>
    </>
  );
};
export default ServiceFeedback;
