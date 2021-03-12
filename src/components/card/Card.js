import React from "react";
import Url from "../url/Url";
import "../card/card.scss";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

function Card(props) {
  const { cardData, lastRecord } = props;
  const { url, name, title, Id } = cardData;
  const history = useHistory();

  function pushRouter(id) {
    history.push(`/react/practice/details/${id}`);
  }

  return (
    <>
      {lastRecord ? (
        <div
          ref={lastRecord}
          className="card-container"
          onClick={() => pushRouter(Id)}
        >
          <Url url={url} theme="url">
            Career Site
          </Url>
          <div>{name}</div>
          <div>{title}</div>
        </div>
      ) : (
        <div className="card-container" onClick={() => pushRouter(Id)}>
          <Url url={url} theme="url">
            Career Site
          </Url>
          <div>{name}</div>
          <div>{title}</div>
        </div>
      )}
    </>
  );
}

Card.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
