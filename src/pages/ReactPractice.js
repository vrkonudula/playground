import React, { useEffect, useState, useRef, useCallback } from "react";

import "../css/ReactPractice.scss";
import SearchBar from "../components/search-bar/SearchBar";
import Cards from "../components/cards/Cards";
import axios from "../api";
import CircularProgress from "@material-ui/core/CircularProgress";

function ReactPractice() {
  const [data, setData] = useState([]);
  const [showSearched, setShowSearched] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(undefined);
  const [nextCursor, setNextCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [size, setSize] = useState(undefined);

  function getNext() {
    setIsLoading(true);
    axios
      .get(`/record/getpaginatedrecords?next_cursor=${nextCursor}`)
      .then((res) => {
        setData((prevData) => {
          return [...prevData, ...res.data.records];
        });
        setSize(res.data.size);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
      });
  }

  const observer = useRef();
  const lastRecord = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          getNext();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  async function searchRecords(value) {
    if (value !== undefined) {
      if (value === "") {
        setSearchValue(undefined);
      } else {
        setSearchValue(value);
      }
    }
  }

  useEffect(() => {
    if (data && data.length) {
      if (data.length !== size) {
        const lastElemId = data[data.length - 1]._id;
        setNextCursor(lastElemId);
      } else {
        setHasMore(false);
      }
    }
  }, [data]);

  useEffect(() => {
    if (searchValue !== undefined) {
      axios
        .get(`/record/search?keyword=${searchValue}`)
        .then((resp) => resp.data)
        .then((data) => {
          setSearchedData(data);
          setShowSearched(true);
        });
    }
  }, [searchValue]);

  useEffect(() => {
    getNext();
  }, []);

  return (
    <>
      <div>
        <div>
          Total number of records loaded :{" "}
          {!showSearched ? data.length : searchedData.length}
        </div>
      </div>
      <SearchBar
        searchRecords={searchRecords}
        setShowSearched={setShowSearched}
        showSearched={showSearched}
        setSearchValue={setSearchValue}
      />
      <Cards
        items={!showSearched ? data : searchedData}
        lastRecord={lastRecord}
      />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <CircularProgress color="secondary" />
        </div>
      ) : null}
      {!hasMore ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "20px",
          }}
        >
          <h3>End of results</h3>
        </div>
      ) : null}
    </>
  );
}

export default ReactPractice;
