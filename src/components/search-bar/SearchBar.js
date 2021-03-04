import React, { useState } from "react";
import { Button } from "reactstrap";
import Checkboxes from "../checkboxes/Checkboxes";
import "./searchbar.scss";

function SearchBar(props) {
  const [checkedYears, setCheckedYears] = useState([]);

  const {
    searchRecords,
    setShowSearched,
    showSearched,
    filterYears,
    setFilterYears,
  } = props;

  function getName() {
    const value = document.getElementById("search").value;
    searchRecords(value);
  }
  function clearSearch() {
    document.getElementById("search").value = "";
    setShowSearched(false);
    setFilterYears(undefined);
  }
  function handleCheckBox(e, year) {
    if (e.checked === true) {
      let copyYears = [...checkedYears];
      copyYears.push(year);
      setCheckedYears(copyYears);
      let copy = [...filterYears];
      let newData = copy.filter((item) =>
        copyYears.includes(item.Graduation_Year)
      );
      console.log(newData);
      setShowSearched(newData);
    }
  }
  function focusInput() {
    document.getElementById("search").focus();
  }
  return (
    <div className="searchBarMain">
      <div className="searchBar">
        <input
          id="search"
          onBlur={() => focusInput()}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              getName();
            }
          }}
          type="text"
          placeholder="Search for companies"
          style={{ width: "300px", height: "50px", marginRight: "20px" }}
        ></input>
        <Button color="secondary" onClick={() => getName()}>
          Find Records
        </Button>
        {showSearched ? (
          <>
            <Button color="warning" onClick={() => clearSearch()}>
              Clear Search
            </Button>
            <Checkboxes
              filterYears={filterYears}
              handleCheckBox={handleCheckBox}
            />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SearchBar;
