import { React } from "react";
import './teams.scss';

function LotteryNames(props) {
  const { team } = props;
  const { name } = team;
  const { members } = team;
  return (
    <div className="team-card">
      <h3>{name}</h3>
      {
        members.map((member,idx) => {
          return <span className="names" key={idx}>{member} { idx!==members.length-1 ? `, `: `` }</span>
        })
      }
    </div>
  );
}

export default LotteryNames;
