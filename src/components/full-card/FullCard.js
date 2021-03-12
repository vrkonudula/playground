import React, { useEffect, useState } from "react";
import Url from "../url/Url";
import "../full-card/fullcard.scss";
import { useParams } from "react-router-dom";
import axios from "../../api";

function FullCard(props) {
  const [object, setObject] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/record/getRecordById?id=${id}`)
      .then((resp) => resp.data)
      .then((data) => setObject(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={"card-containe"}>
      {object.company ? (
        <>
          <Url url={object.company.careerUrl} theme="url">
            Career Site
          </Url>
          <div>Employer : {object.company.companyName}</div>
        </>
      ) : ''}
      <div>Title : {object.jobTitle}</div>
      <div>Start Date : {object.startDate}</div>
      <div>University : {object.universityName}</div>
      <div>Specialization : {object.specialization}</div>
      <div>Graduation year : {object.graduationYear}</div>
    </div>
  );
}

export default FullCard;
