import "../css/ClassExercises.css";
import React, { useState } from "react";

function ClassExercises() {
    const [vh, setVh] = useState("mm");
    const [dn, setDn] = useState("mm");
  return (
      <div>
          <button onClick={() => setVh("dn")}>Display:none</button>
          <button onClick={() => setDn("vh")}>Visibility:hidden</button>
      <div className={`${vh}`}>1</div>
        <div className={`${dn}`}>2</div>
        <div className="random">3</div>
        <div className="random">4</div>
        <div className="random">5</div>
        <div className="random">6</div>
        <div className="random">7</div>
        <div className="random">8</div>
        <div className="random">9</div>
        <div className="random">10</div>
    </div>
  );
}

export default ClassExercises;
