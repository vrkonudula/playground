import "./form.scss";

function Form(props) {
  const {
    careerUrl,
    graduationYear,
    startDate,
    employer,
    specialization,
    universityName,
    jobTitle,
    setCareerUrl,
    setEmployer,
    setGraduationYear,
    setJobTitle,
    setSpecialization,
    setStartDate,
    setuniversityName,
    handleSubmitForm,
    submitDisable,
  } = props;

  function handleDisabled() {
    let elen = employer.length;
    if (elen >= 2 && elen <= 20 && !submitDisable) {
      return false;
    }
    return true;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Student Details</h1>
      <div>
        <div className="form-field">
          <label>University name : </label>
          <input
            type="text"
            onChange={(e) => setuniversityName(e.target.value)}
            value={universityName}
          />
        </div>
        <div className="form-field">
          <label>Graduation year : </label>
          <input
            type="text"
            onChange={(e) => setGraduationYear(e.target.value)}
            value={graduationYear}
          />
        </div>
        <div className="form-field">
          <label>Specialization : </label>
          <input
            type="text"
            onChange={(e) => setSpecialization(e.target.value)}
            value={specialization}
          />
        </div>
        <div className="form-field">
          <label>Employeer : </label>
          <input
            type="text"
            onChange={(e) => setEmployer(e.target.value)}
            value={employer}
          />
        </div>
        <div className="form-field">
          <label>Career Url : </label>
          <input
            type="text"
            onChange={(e) => setCareerUrl(e.target.value)}
            value={careerUrl}
            placeholder="Please start with https://"
          />
        </div>
        <div className="form-field">
          <label>Job Title : </label>
          <input
            type="text"
            onChange={(e) => setJobTitle(e.target.value)}
            value={jobTitle}
          />
        </div>
        <div className="form-field">
          <label>Job start date : </label>
          <input
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
    
        </div>
      </div>
    </div>
  );
}

export default Form;
