import "../css/Exercise1.css";

function Exercise1() {
  return (
    <div className="e1content">
      <div>
        <h1>Student details</h1>
        <form>
          <label for="fname">First Name : </label>
          <input id="fname" type="text" maxLength="128" required />
          <br />
          <label for="lname">Last Name : </label>
          <input id="fname" type="text" maxLength="128" required />
          <br />
          <label for="gender">Gender : </label>
          <label for="male">Male</label>
          <input type="radio" name="gender" id="male" />
          <label for="female">Female</label>
          <input type="radio" name="gender" id="female" />
          <br />
          <label for="degree">Master's Degree : </label>
          <select id="degree">
            <option>select</option>
            <option>Computer Science</option>
            <option>Electrical</option>
            <option>Instrumentation</option>
            <option>Civil</option>
          </select>{" "}
          <br />
          <label for="mail">Email address : </label>
          <input type="email" />
          <br />
          <label for="file" multiple>
            Resume :{" "}
          </label>
          <input type="file" />
          <br />
          <label for="gradDate">Graduation date : </label>
          <input type="date" id="gradDate" max="2121-01-01" />
          <br />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    </div>
  );
}

export default Exercise1;
