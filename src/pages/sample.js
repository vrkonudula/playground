import "../css/sample.css";
const data = require("../data/Student_Data.json");
function sample() {
  return (
    <>
        {data.map((item, ind) => {
            return <p style={{"fontSize":"20px"}} key={ind}>{item.Employer}, {item.Job_Title}, {item.Career_Url}</p>;
        })}
    </>
  );
}
export default sample;
