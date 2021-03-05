import React, { useEffect, useState } from "react";
import Url from "../url/Url";
import "../full-card/fullcard.scss";
import { useParams } from "react-router-dom";
import { axios } from '../../api';

function FullCard(props) {
  const [object, setObject] = useState({});

  console.log(useParams());
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/record?id=${id}`)
      .then(resp => resp.data)
      .then(data => setObject(data))
      .catch(err => console.log(err))
   },[])

  return (
    <div className={"card-containe"}>
      <Url url={object.Career_url} theme="url">
        Career Site
      </Url>
      <div>Employer : {object.Employer}</div>
      <div>Title : {object.Job_Title}</div>
      <div>Start Date : {object.Job_Start_Date}</div>
      <div>University : {object.University_Name}</div>
      <div>Specialization : {object.Specialization}</div>
      <div>Graduation year : {object.Graduation_Year}</div>
    </div>
  );
}

export default FullCard;
