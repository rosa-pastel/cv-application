import React, { useState } from "react";
export default function Experience(props) {
  const [records, setRecords] = useState([
    {
      startDate: "2003",
      endDate: "2011",
      company: "Dunder Mifflin",
      city: "Scranton, PA",
      detail: "Receptionist",
      id: 0,
    },
    {
      startDate: "2011",
      endDate: "",
      company: "Dunder Mifflin",
      city: "Scranton, PA",
      detail: "Office Manager",
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
  function updateCompany(e, id) {
    const newCompany = e.target.value;
    const stateCopy = records.slice();
    stateCopy.forEach((record) => {
      if (record.id === id) record.company = newCompany;
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
  function addExperience() {
    setRecords([
      ...records,
      {
        startDate: "",
        endDate: "",
        company: "",
        city: "",
        detail: "",
        id: lastID + 1,
      },
    ]);
    setLastID(lastID + 1);
  }
  function deleteExperience(id) {
    setRecords(
      records.filter((record) => {
        return id !== record.id;
      })
    );
  }
  if (props.mode === "edit") {
    return (
      <div id="experience">
        <h1>Experience</h1>
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
                    placeholder="Company"
                    defaultValue={record.company}
                    onChange={(e) => updateCompany(e, record.id)}
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
              <button
                onClick={() => {
                  deleteExperience(record.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button onClick={addExperience}>Add Experience</button>
      </div>
    );
  } else if (records.length <= 0) {
    return "";
  } else {
    return (
      <div id="experience">
        <h1>Experience</h1>
        {records.map((record) => {
          if (record.company.length < 2 && record.detail.length < 2) return "";
          else
            return (
              <div className="record" key={record.id}>
                <div>
                  {record.startDate} - {record.endDate || "Present"}
                </div>
                <div>
                  {(function () {
                    if (record.company.length >= 2)
                      return (
                        <div>
                          <h1>{record.company}</h1>
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
                    if (record.company.length >= 2)
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
