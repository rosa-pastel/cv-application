import React, { useState } from "react";
export default function Education(props) {
  const [records, setRecords] = useState([
    {
      startDate: "2008",
      endDate: "2010",
      institution: "Pratt Institute",
      city: "Brooklyn, NY",
      detail: "Fine Art Major",
      id: 0,
    },
    {
      startDate: "1999",
      endDate: "2003",
      institution: "Valley View High School",
      city: "Archbald, PA",
      detail: "",
      id: 1,
    },
  ]);
  const [lastID, setLastID] = useState(1);
  function updateStartDate(e, id) {
    const newStartDate = e.target.value;
    const stateCopy = records.slice();
    stateCopy.forEach((record) => {
      if (record.id === id) record.startDate = newStartDate;
    });
    setRecords(stateCopy);
  }
  function updateEndDate(e, id) {
    const newEndDate = e.target.value;
    const stateCopy = records.slice();
    stateCopy.forEach((record) => {
      if (record.id === id) record.endDate = newEndDate;
    });
    setRecords(stateCopy);
  }
  function updateInstitution(e, id) {
    const newInstitution = e.target.value;
    const stateCopy = records.slice();
    stateCopy.forEach((record) => {
      if (record.id === id) record.institution = newInstitution;
    });
    setRecords(stateCopy);
  }
  function updateCity(e, id) {
    const newCity = e.target.value;
    const stateCopy = records.slice();
    stateCopy.forEach((record) => {
      if (record.id === id) record.city = newCity;
    });
    setRecords(stateCopy);
  }
  function updateDetail(e, id) {
    const newDetail = e.target.value;
    const stateCopy = records.slice();
    stateCopy.forEach((record) => {
      if (record.id === id) record.detail = newDetail;
    });
    setRecords(stateCopy);
  }
  function addEducation() {
    setRecords([
      ...records,
      {
        startDate: "",
        endDate: "",
        institution: "",
        city: "",
        detail: "",
        id: lastID + 1,
      },
    ]);
    setLastID(lastID + 1);
  }
  function deleteEducation(id) {
    setRecords(
      records.filter((record) => {
        return record.id !== id;
      })
    );
  }
  if (props.mode === "edit") {
    return (
      <div id="education">
        <h1>Education</h1>
        {records.map((record) => {
          return (
            <div className="record edit" key={record.id}>
              <div>
                <label>Start Date</label>
                <input
                  defaultValue={record.startDate}
                  onChange={(e) => updateStartDate(e, record.id)}
                ></input>
                <label>End Date</label>
                <input
                  defaultValue={record.endDate}
                  onChange={(e) => updateEndDate(e, record.id)}
                ></input>
              </div>
              <div>
                <div>
                  <input
                    placeholder="Institution"
                    defaultValue={record.institution}
                    onChange={(e) => updateInstitution(e, record.id)}
                  ></input>
                  <input
                    placeholder="City"
                    defaultValue={record.city}
                    onChange={(e) => updateCity(e, record.id)}
                  ></input>
                </div>
                <input
                  placeholder="Add details"
                  defaultValue={record.detail}
                  onChange={(e) => updateDetail(e, record.id)}
                ></input>
              </div>
              <button onClick={() => deleteEducation(record.id)}>Delete</button>
            </div>
          );
        })}
        <button onClick={addEducation}>Add Education</button>
      </div>
    );
  } else if (records.length <= 0) {
    return "";
  } else {
    return (
      <div id="education">
        <h1>Education</h1>
        {records.map((record) => {
          if (record.institution.length < 2 && record.detail.length < 2)
            return "";
          else
            return (
              <div className="record" key={record.id}>
                <div>
                  {record.startDate} - {record.endDate || "Present"}
                </div>
                <div>
                  {(function () {
                    if (record.institution.length >= 2)
                      return (
                        <div>
                          <h1>{record.institution}</h1>
                          <h1>{record.city}</h1>
                        </div>
                      );
                    else
                      return (
                        <div>
                          <h1>{record.detail}</h1>
                          <h1>{record.city}</h1>
                        </div>
                      );
                  })()}
                  {(function () {
                    if (record.institution.length >= 2)
                      return <p>{record.detail}</p>;
                  })()}
                </div>
              </div>
            );
        })}
      </div>
    );
  }
}
