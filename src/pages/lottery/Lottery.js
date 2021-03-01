import React, { useState } from "react";
import LotteryNames from "../../components/lotteryTeams/LotteryTeams";
import "./lottery.scss";

function Lottery() {
  const [teams, setTeams] = useState([]);
  let names = [
    "Venkat",
    "Kevin",
    "Kinjal",
    "Eric",
    "Ronish",
    "Prakash",
    "Lalit",
  ];

  const generateLottery = () => {
    for (let i = names.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = names[i];
      names[i] = names[j];
      names[j] = temp;
    }
    return names;
  };

  const generateTeams = (array, numberOfTeams) => {
    let teamObjects = [];
    let teams = [];
    let teamNames = ["Tesla", "Newton", "Einstein"];
    let object = {};
    while (numberOfTeams > 0) {
      object["name"] = teamNames[numberOfTeams - 1];
      teams = names.splice(0, Math.floor(names.length / numberOfTeams));
      object["members"] = teams;
      teamObjects.push(object);
      object = {};
      numberOfTeams--;
    }
    setTeams(teamObjects);
  };

  return (
    <>
      <h1>Lottery</h1>
      <div id="buttons">
        <button
          id="lottery"
          className="btn"
          onClick={() => {
            generateTeams(generateLottery(), 3);
          }}
        >
          Generate Lottery
        </button>
        {teams.length > 0 ? (
          <button
            id="slack"
            className="btn"
            onClick={() => {
              window.open(
                "https://app.slack.com/client/T01JL9218CA/C01MLKQKP2P",
                "_blank"
              );
            }}
          >
            Share in Slack
          </button>
        ) : (
          ""
        )}
        {teams.length > 0 ? (
          <button
            id="mail"
            className="btn"
            onClick={() => {
              window.open(
                "https://www.gmail.com",
                "_blank"
              );
            }}
          >
            Share in Email
          </button>
        ) : (
          ""
        )}
      </div>
      <div>
        {teams.length > 0 ? <h2>Teams</h2> : ""}
        {teams.map((team, idx) => {
          return <LotteryNames team={team} key={idx} />;
        })}
      </div>
    </>
  );
}

export default Lottery;
