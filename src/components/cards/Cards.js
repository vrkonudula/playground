import React, { useState } from "react";
import Card from "../card/Card";
import "./cards.scss";

function Cards(props) {
  const {
    items,
    setFav,
    fav,
    deleteRecord,
    getRecordDetails,
    modal,
    setModal,
    toggle,
    showSearched,
  } = props;
  const [currentPage, setCurrentPage] = useState(1);
  let numberOfRecords = items.length;
  let count = 25;
  let numberOfPages = Math.ceil(numberOfRecords / count);
  let pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(Number(i + 1));
  }
  let copy = items.slice(count * (currentPage - 1), count * currentPage);
  return (
    <div>
      {/* <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Full Details</ModalHeader>
        <ModalBody>
          <FullCard cardData={ fullObject }/>
        </ModalBody>
      </Modal> */}
      <div className="pagesDiv">
        <div
          className={`${
            currentPage === 1 ? "buttonInvisible" : "buttonVisible"
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
        {pages.map((page, idx) => {
          return (
            <div
              key={idx}
              className={`${
                idx + 1 === currentPage ? "pageSelected" : "pageUnselected"
              }`}
            >
              {page}
            </div>
          );
        })}
        <div
          className={`${
            currentPage === numberOfPages ? "buttonInvisible" : "buttonVisible"
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
      {!showSearched
        ? copy.map((item) => {
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
                //getRecordDetails={getRecordDetails}
                modal={modal}
                setModal={setModal}
                toggle={toggle}
              />
            );
          })
        : items.map((item) => {
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
                //getRecordDetails={getRecordDetails}
                modal={modal}
                setModal={setModal}
                toggle={toggle}
              />
            );
          })}
    </div>
  );
}

export default Cards;
