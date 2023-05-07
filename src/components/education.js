import React from "react";
export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [
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
      ],
      lastID: 1,
    };
    this.updateStartDate = this.updateStartDate.bind(this);
    this.updateEndDate = this.updateEndDate.bind(this);
    this.updateInstitution = this.updateInstitution.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.updateDetail = this.updateDetail.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }
  updateStartDate(e, id) {
    const newStartDate = e.target.value;
    this.setState((state) => {
      const stateCopy = state.records.slice();
      stateCopy.forEach((record) => {
        if (record.id === id) record.startDate = newStartDate;
      });
      return { records: stateCopy };
    });
  }
  updateEndDate(e, id) {
    const newEndDate = e.target.value;
    this.setState((state) => {
      const stateCopy = state.records.slice();
      stateCopy.forEach((record) => {
        if (record.id === id) record.endDate = newEndDate;
      });
      return { records: stateCopy };
    });
  }
  updateInstitution(e, id) {
    const newInstitution = e.target.value;
    this.setState((state) => {
      const stateCopy = state.records.slice();
      stateCopy.forEach((record) => {
        if (record.id === id) record.institution = newInstitution;
      });
      return { records: stateCopy };
    });
  }
  updateCity(e, id) {
    const newCity = e.target.value;
    this.setState((state) => {
      const stateCopy = state.records.slice();
      stateCopy.forEach((record) => {
        if (record.id === id) record.city = newCity;
      });
      return { records: stateCopy };
    });
  }
  updateDetail(e, id) {
    const newDetail = e.target.value;
    this.setState((state) => {
      const stateCopy = state.records.slice();
      stateCopy.forEach((record) => {
        if (record.id === id) record.detail = newDetail;
      });
      return { records: stateCopy };
    });
  }
  addEducation() {
    this.setState((state) => {
      return {
        records: [
          ...state.records,
          {
            startDate: "",
            endDate: "",
            institution: "",
            city: "",
            detail: "",
            id: this.state.lastID + 1,
          },
        ],
        lastID: this.state.lastID + 1,
      };
    });
  }
  deleteEducation(id) {
    this.setState((state) => {
      return {
        records: state.records.filter((record) => {
          return record.id !== id;
        }),
      };
    });
  }
  render() {
    if (this.props.mode === "edit") {
      return (
        <div id="education">
          <h1>Education</h1>
          {this.state.records.map((record) => {
            return (
              <div className="record edit" key={record.id}>
                <div>
                  <label>Start Date</label>
                  <input
                    defaultValue={record.startDate}
                    onChange={(e) => this.updateStartDate(e, record.id)}
                  ></input>
                  <label>End Date</label>
                  <input
                    defaultValue={record.endDate}
                    onChange={(e) => this.updateEndDate(e, record.id)}
                  ></input>
                </div>
                <div>
                  <div>
                    <input
                      placeholder="Institution"
                      defaultValue={record.institution}
                      onChange={(e) => this.updateInstitution(e, record.id)}
                    ></input>
                    <input
                      placeholder="City"
                      defaultValue={record.city}
                      onChange={(e) => this.updateCity(e, record.id)}
                    ></input>
                  </div>
                  <input
                    placeholder="Add details"
                    defaultValue={record.detail}
                    onChange={(e) => this.updateDetail(e, record.id)}
                  ></input>
                </div>
                <button onClick={() => this.deleteEducation(record.id)}>
                  Delete
                </button>
              </div>
            );
          })}
          <button onClick={this.addEducation}>Add Education</button>
        </div>
      );
    } else if (this.state.records.length <= 0) {
      return "";
    } else {
      return (
        <div id="education">
          <h1>Education</h1>
          {this.state.records.map((record) => {
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
}
