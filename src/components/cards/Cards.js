import React from "react";
import Card from "../card/Card";
import "./cards.scss";

function Cards(props) {
  const { items, lastRecord } = props;
  return (
    <div>
      {items.map((item, index) => {
        const { company, jobTitle, _id } = item;
        const empDetails = {
          name: company.companyName,
          url: company.careerUrl,
          title: jobTitle,
          Id: _id,
        };
        if (items.length !== index + 1)
          return <Card cardData={empDetails} key={_id} />;
        return <Card lastRecord={lastRecord} cardData={empDetails} key={_id} />;
      })}
    </div>
  );
}

export default Cards;
