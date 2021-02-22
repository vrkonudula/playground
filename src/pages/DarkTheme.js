import "../theme.scss";
import { useState } from "react";
function DarkTheme() {
  const [th, setTh] = useState("lighttheme");
  return (
    <div className="e4content">
      <div className={`${th}`}> You are in ligh theme!!</div>
      <button
        onClick={() => {
          setTh("lighttheme");
          document.getElementsByClassName(`${th}`)[0].innerHTML =
            " You are in light theme!!";
        }}
      >
        Light Theme
      </button>
      <button
        onClick={() => {
          setTh("darktheme");
          document.getElementsByClassName(`${th}`)[0].innerHTML =
            " You are in dark theme!!";
        }}
      >
        Dark Theme
      </button>
    </div>
  );
}

export default DarkTheme;
