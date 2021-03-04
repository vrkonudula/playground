import React from "react";

function Checkboxes(props) {
  const { filterYears,handleCheckBox } = props;
  return (
    <div>
      {filterYears.map((year, idx) => {
        return (
          <div style={{ marginRight: "5px" }}>
            <input
              type="checkbox"
              value={year}
              key={idx}
              onChange={(e) => handleCheckBox(e,year)}
              style={{ marginRight: "5px" }}
            />
            <label>{year}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Checkboxes;
