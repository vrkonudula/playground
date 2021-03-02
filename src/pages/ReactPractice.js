import React, { Children, useEffect, useState } from "react";
import Card from "../components/card/Card";
import dataJSON from "../data/Student_Data.json";
import "../css/ReactPractice.scss";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Form from "./form/Form";

const uuidData = dataJSON.map((i) => {
  return {
    ...i,
    Id: uuidv4(),
  };
});

function ReactPractice() {
  const [fav, setFav] = useState([]);
  const [data, setData] = useState([]);
  const [deletedRecords, setDeletedRecords] = useState([]);
  const [careerUrl, setCareerUrl] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [employer, setEmployer] = useState("");
  const [universityName, setuniversityName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [submitDisable, setSubmitDisable] = useState(false);

  function getFavs() {
    let favData = uuidData.filter((i) => {
      return fav.includes(i.Id);
    });
    let favDataNames = favData.map((i) => i.Employer);
    //console.log(favDataNames);
    return favDataNames;
  }

  function getDeletedNames() {
    let names = uuidData.filter((i) => {
      return deletedRecords.includes(i.Id);
    });
    let deletedRecordNames = names.map((i) => i.Employer);
    console.log(deletedRecordNames);
  }

  function deleteRecord(Id) {
    let temp = [...deletedRecords];
    temp.push(Id);
    setDeletedRecords(temp);
    let remainingRecords = data.filter((i) => {
      return i.Id !== Id;
    });
    setData(remainingRecords);
  }

  function getAllRecords() {
    let mergedData = [...data];
    deletedRecords.forEach((i) =>
      mergedData.push(
        uuidData.find((record) => {
          return record.Id === i;
        })
      )
    );
    console.log(mergedData.length);
    setData(mergedData);
    setDeletedRecords([]);
  }

  function handleSubmitForm() {
    setSubmitDisable(true);
    setTimeout(() => setSubmitDisable(false), 3000);
    let objectReady = {
      Career_Url: careerUrl,
      Employer: employer,
      Graduation_Year: graduationYear,
      Job_Start_Date: startDate,
      Job_Title: jobTitle,
      Specialization: specialization,
      University_Name: universityName,
      Id: uuidv4(),
    };
    let copyData = [objectReady, ...data];
    setData(copyData);
  }

  useEffect(() => {
    setData(uuidData);
  }, []);

  return (
    <>
      <div>
        {/* {'Total records : '} */}
        <h2>Favourite Companies</h2>

        <div style={{ fontWeight: "500", marginBottom: "20px" }}>
          {fav.length > 0 ? getFavs().join(", ") : "No favourites added"}
        </div>
        <div>
          <button
            onClick={() => {
              setFav([]);
            }}
          >
            Remove all Favourites
          </button>
          <button
            onClick={() => {
              getAllRecords();
            }}
          >
            Retrieve Deleted Records
          </button>
          <Form
            employer={employer}
            setEmployer={setEmployer}
            careerUrl={careerUrl}
            setCareerUrl={setCareerUrl}
            specialization={specialization}
            setSpecialization={setSpecialization}
            startDate={startDate}
            setStartDate={setStartDate}
            jobTitle={jobTitle}
            setJobTitle={setJobTitle}
            universityName={universityName}
            setuniversityName={setuniversityName}
            graduationYear={graduationYear}
            setGraduationYear={setGraduationYear}
            handleSubmitForm={handleSubmitForm}
            submitDisable={submitDisable}
          />
          {/* <Link
            to={{
              pathname: "/react/form",
            state: {
                employer: employer,
                setEmployer: setEmployer(),
                careerUrl: careerUrl,
                setCareerUrl: setCareerUrl(),
                specialization: specialization,
                setSpecialization: setSpecialization(),
                startDate: startDate,
                setStartDate: setStartDate(),
                jobTitle: jobTitle,
                setJobTitle: setJobTitle(),
                universityName: universityName,
                setuniversityName: setuniversityName(),
                graduationYear: graduationYear,
                setGraduationYear: setGraduationYear()
              }
            }}
            style={{
              textDecoration: "none",
              marginLeft: "10px",
              padding: "5px",
              backgroundColor: "brown",
              color: "white",
              borderRadius: "3px",
            }}
          >
            Create new record
          </Link> */}
        </div>
        <div>Total number of records : {data.length}</div>
        <div>Total number of deleted records : {deletedRecords.length}</div>
      </div>
      <div>
        <h2>List of companies</h2>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <div className="orangeDiv"></div>
            <div className="text">Favourites</div>
          </div>
          <div style={{ display: "flex", marginLeft: "10px" }}>
            <div className="greenDiv"></div>
            <div className="text">Unfavourites</div>
          </div>
        </div>
      </div>
      {data.map((item) => {
        const { Employer, Career_Url, Job_Title, Id } = item;
        const empDetails = {
          name: Employer,
          url: Career_Url,
          title: Job_Title,
          Id,
        };
        return (
          <Card
            cardData={empDetails}
            key={Id}
            setFav={setFav}
            fav={fav}
            deleteRecord={deleteRecord}
          />
        );
      })}
    </>
  );
}

export default ReactPractice;
