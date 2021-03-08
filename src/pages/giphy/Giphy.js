
import React, { useEffect, useState } from "react";

function Giphy() {
  const [data, setData] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=y1ZFwiomdYKWy80gtSxU4iEdv165yeOD`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setData(data.data);
      });
  }, [searchTerm]);

  function getValue() {
    let value = document.getElementById("searchValue").value;
    console.log(value);
    setSearchTerm(value);
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h1>Giphy Search</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
        <div>
          <input type="text" id="searchValue" />
          <button style={{ marginLeft: "20px" }} onClick={() => getValue()}>
            Search gifs
          </button>
        </div>
      </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
              {
                  data.map((item,idx) => {
                      return <div style={{height:"200px",width:"200px",margin:"20px"}}>
                        <img src={item.images.fixed_width.url} alt="sample" style={{width:"100%",height:"100%",objectFit:"contain"}}/>
                    </div>
                  })
              }
      </div>
    </>
  );
}

export default Giphy;
