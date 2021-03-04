import React from "react";
import Url from "../url/Url";
import "../card/card.scss";
import PropTypes from "prop-types";

function Card(props) {
  const { cardData, setFav, fav, deleteRecord, getRecordDetails } = props;
  const { url, name, title, Id } = cardData;

  function handleClick(e, Id) {
    e.stopPropagation();
    let index = fav.findIndex((i) => i === Id);
    if (index !== -1) return alert("Already added to favourites");
    let copyFav = [...fav];
    copyFav.push(Id);
    setFav(copyFav);
  }

  function handleClickUnFav(e, Id) {
    e.stopPropagation();
    let index = fav.findIndex((i) => i === Id);
    if (index === -1) {
      return alert("You have to favorite it to be removed from the list");
    }
    let copyFav = [...fav];
    copyFav.splice(index, 1);
    setFav(copyFav);
  }

  function isFavourite() {
    return fav.includes(Id);
  }

  return (
    <div
      className={isFavourite() ? "card-container-favourite" : "card-container"}
      onClick={() => getRecordDetails(Id)}
    >
      <Url url={url} theme="url">
        Career Site
      </Url>
      <div>{name}</div>
      <div>{title}</div>
      <button onClick={(e) => handleClick(e, Id)}>Favourite</button>
      <button onClick={(e) => handleClickUnFav(e, Id)}>Unfavourite</button>
      <button onClick={(e) => deleteRecord(e, Id)}>Delete Record</button>
    </div>
  );
}

Card.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
