import React from "react";
import { Button } from "reactstrap";
import "./searchbar.scss";

function SearchBar(props) {
  const {
    searchRecords,
    setShowSearched,
    showSearched,
    setSearchValue,
  } = props;

  function getName() {
    const value = document.getElementById("search").value;
    searchRecords(value);
  }
  function clearSearch() {
    document.getElementById("search").value = "";
    setSearchValue(undefined);
    setShowSearched(false);
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
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SearchBar;
