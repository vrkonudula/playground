import React from "react";
import Url from "../url/Url";
import "../card/card.scss";
import PropTypes from "prop-types";
import { useState } from "react";

function Card(props) {
  //const [vh, setVh] = useState("invisible");
  //const [currentFav, setCurrentFav] = useState("");
  const { cardData, setFav, fav, deleteRecord } = props;
  const { url, name, title, Id } = cardData;

  function handleClick(e, Id) {
    // if (vh === "visible") {
    //   return alert("Already added to favourites");
    // }
    let index = fav.findIndex(i => i === Id);
    if (index !== -1)
      return alert('Already added to favourites');
    //setCurrentFav("favourite");
    //setVh("visible");
    let copyFav = [...fav];
    // if (copyFav[0] === "No favourites yet") {
    //   copyFav.pop();
    // }
    copyFav.push(Id);
    setFav(copyFav);
  }

  function handleClickUnFav(e, Id) {
    // if (vh === "invisible") {
    //   return alert("You have to favorite it to be removed from the list");
    // }
    let index = fav.findIndex(i => i === Id)
    if (index === -1) {
      return alert('You have to favorite it to be removed from the list');
    }
    //setCurrentFav("");
    //setVh("invisible");

    let copyFav = [...fav];
    copyFav.splice(index, 1);
    //if (copyFav.length === 0) copyFav.push("No favourites yet");
    setFav(copyFav);
  }

  function isFavourite() {
    return fav.includes(Id)
  }

  return (
    <div className={ isFavourite() ? 'card-container-favourite' : 'card-container' }>
      <Url url={url} theme="url">
        Career Site
      </Url>
      <div>{name}</div>
      <div>{title}</div>
      <button onClick={(e) => handleClick(e, Id)}>Favourite</button>
      <button onClick={(e) => handleClickUnFav(e, Id)}>Unfavourite</button>
      <button onClick={(e)=> deleteRecord(Id)}>Delete Record</button>
    </div>
  );
}

Card.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
