import React, { useEffect, useState } from "react";
import "./carousel.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

let images = [
  "https://images.unsplash.com/photo-1614680889612-d82e69f49ea2?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1610963196817-7d1415647029?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

function CarouselExample() {
  const [index, setIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState(undefined);
  const [vhLeft, setVhLeft] = useState("");
  const [vhRight, setVhRight] = useState("");

  useEffect(() => {
    if (index === 0) setVhLeft("arrowInvisible");
    else setVhLeft("");
    if (index === images.length - 1) setVhRight("arrowInvisible");
    else setVhRight("");
    let image = images[index];
    setImageUrl(image);
  }, [index]);

  function handleLeft() {
    console.log("left");
    if (index > 0) {
      console.log("left invoked");
      setIndex(index - 1);
    }
  }

  function handleRight() {
    console.log("right");
    if (index < images.length - 1) {
      console.log("right invoked");
      setIndex(index + 1);
    } else {
    }
  }

  return (
    <div id="carousel-main">
      <div id="carousel">
        <div id="leftNav">
          <div className={`${vhLeft}`} onClick={() => handleLeft()}>
            <ArrowBackIosIcon />
          </div>
        </div>{" "}
        <div id="photoContainer">
          <img id="photo" src={imageUrl} alt="project pics" />
        </div>
        <div id="rightNav">
          <div className={`${vhRight}`} onClick={() => handleRight()}>
            <ArrowForwardIosIcon />
          </div>
        </div>{" "}
      </div>{" "}
      <div className="imageNumber">
        {" "}
        {index + 1} - {images.length}{" "}
      </div>
    </div>
  );
}

export default CarouselExample;
