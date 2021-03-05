import React, { useEffect, useState } from "react";

//import dataJSON from "../data/Student_Data.json";
import "../css/ReactPractice.scss";
import { v4 as uuidv4 } from "uuid";
import Form from "./form/Form";
import ModalExample from "../components/modal/Modal";
import FullCard from "../components/full-card/FullCard";
import SearchBar from "../components/search-bar/SearchBar";
import Cards from "../components/cards/Cards";
import { axios } from '../api'
import CircularProgress from "@material-ui/core/CircularProgress";

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
  const [modal, setModal] = useState(false);
  const [fullObject, setFullObject] = useState({});
  const [showSearched, setShowSearched] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  const [modalform, setModalform] = useState(false);
  const [filterYears, setFilterYears] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const toggle = () => setModal(!modal);
  const toggleForm = () => setModalform(!modalform);

  function getFavs() {
    let favData = data.filter((i) => {
      return fav.includes(i.Id);
    });
    let favDataNames = favData.map((i) => i.Employer);
    //console.log(favDataNames);
    return favDataNames;
  }

  function getDeletedNames() {
    let names = data.filter((i) => {
      return deletedRecords.includes(i.Id);
    });
    let deletedRecordNames = names.map((i) => i.Employer);
    console.log(deletedRecordNames);
  }

  function deleteRecord(e, Id) {
    e.stopPropagation();
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
        data.find((record) => {
          return record.Id === i;
        })
      )
    );
    setData(mergedData);
    setDeletedRecords([]);
  }


  

  // function getRecordDetails(id) {
  //   // let copy = [...data];
  //   // let record = copy.find((record) => record.Id === id);
  //   // setFullObject(record);
  //   // console.log(record);
  //   axios.get(`/record?id=${id}`)
  //     .then(resp => resp.data)
  //     .then(data => setFullObject(data))
  //     .catch(err => console.log(err))
  //   toggle();
  // }

  function searchRecords(value) {
    if (value !== "") {
      let copyData = [...data];
      let newData = copyData.filter((record) => {
        return record.Employer.toLowerCase().includes(value.toLowerCase());
      });
      setSearchedData(newData);
      let years = [
        ...new Set(newData.map((item) => item.Graduation_Year)),
      ].sort((a, b) => a - b);
      console.log(years);
      setFilterYears(years);
      setShowSearched(true);
    }
  }

  function handleSubmitForm() {
    setSubmitDisable(true);
    setTimeout(() => {
      setSubmitDisable(false);
    }, 3000);
    let objectReady = {
      Career_Url: careerUrl,
      Employer: employer,
      Graduation_Year: Number(graduationYear),
      Job_Start_Date: startDate,
      Job_Title: jobTitle,
      Specialization: specialization,
      University_Name: universityName,
      Id: uuidv4(),
    };
    let copyData = [objectReady, ...data];
    console.log(copyData);
    setData(copyData);
  }

  useEffect(() => {
    axios
      .get("/records")
      .then((resp) => resp.data)
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((err) => console.log(err));
    //setData(uuidData);
  }, []);

  return (
    <>
      {isLoading ? (
        <div style={{display:"flex",height:"100vh",alignItems:"center",justifyContent:"space-evenly"}}><CircularProgress color="secondary" /></div>
      ) : (
        <>
          <div>
            <ModalExample
              toggle={toggleForm}
              modal={modalform}
              title="Complete Details"
              showFooter={true}
              handleSubmitForm={handleSubmitForm}
            >
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
                submitDisable={submitDisable}
              />
            </ModalExample>
            <div>Total number of records : {data.length}</div>
            <div>Total number of deleted records : {deletedRecords.length}</div>
            <h6>
              <span
                style={{
                  fontWeight: "500",
                  borderBottom: "1px solid",
                  cursor: "pointer",
                }}
                onClick={toggleForm}
              >
                Click here
              </span>{" "}
              to create new record.
            </h6>
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
            </div>
          </div>
          <div>
            <h2>List of companies</h2>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <div className="orangeDiv"></div>
                <div className="text">Favourites</div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "10px",
                  marginBottom: "20px",
                }}
              >
                <div className="greenDiv"></div>
                <div className="text">Unfavourites</div>
              </div>
            </div>
          </div>
          <SearchBar
            searchRecords={searchRecords}
            setShowSearched={setShowSearched}
            showSearched={showSearched}
            filterYears={filterYears}
            setFilterYears={setFilterYears}
            searchedData={searchedData}
            setSearchedData={setSearchedData}
          />
          <ModalExample
            toggle={toggle}
            modal={modal}
            title="Complete Details"
            showFooter={false}
          >
            <FullCard cardData={fullObject} />
          </ModalExample>

          <Cards
            items={!showSearched ? data : searchedData}
            setFav={setFav}
            fav={fav}
            deleteRecord={deleteRecord}
            //getRecordDetails={getRecordDetails}
            modal={modal}
            setModal={setModal}
            toggle={toggle}
            showSearched={showSearched}
          />
        </>
      )}
    </>
  );
}

export default ReactPractice;
