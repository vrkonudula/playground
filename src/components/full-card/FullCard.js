import React from "react";
import Url from "../url/Url";
import "../full-card/fullcard.scss";

function FullCard(props) {
  const { cardData } = props;

  return (
    <div className={"card-containe"}>
      <Url url={cardData.Career_url} theme="url">
        Career Site
      </Url>
      <div>Employer : {cardData.Employer}</div>
      <div>Title : {cardData.Job_Title}</div>
      <div>Start Date : {cardData.Job_Start_Date}</div>
      <div>University : {cardData.University_Name}</div>
      <div>Specialization : {cardData.Specialization}</div>
      <div>Graduation year : {cardData.Graduation_Year}</div>
    </div>
  );
}

export default FullCard;
