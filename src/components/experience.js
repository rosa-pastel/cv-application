import React from "react";
export default class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [
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
      ],
      lastID: 1,
    };
    this.updateStartDate = this.updateStartDate.bind(this);
    this.updateEndDate = this.updateEndDate.bind(this);
    this.updateCompany = this.updateCompany.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.updateDetail = this.updateDetail.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
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
  updateCompany(e, id) {
    const newCompany = e.target.value;
    this.setState((state) => {
      const stateCopy = state.records.slice();
      stateCopy.forEach((record) => {
        if (record.id === id) record.company = newCompany;
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
  addExperience() {
    this.setState((state) => {
      return {
        records: [
          ...state.records,
          {
            startDate: "",
            endDate: "",
            company: "",
            city: "",
            detail: "",
            id: state.lastID + 1,
          },
        ],
        lastID: state.lastID + 1,
      };
    });
  }
  deleteExperience(id) {
    this.setState((state) => {
      return {
        records: state.records.filter((record) => {
          return id !== record.id;
        }),
      };
    });
  }
  render() {
    if (this.props.mode === "edit") {
      return (
        <div id="experience">
          <h1>Experience</h1>
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
                      placeholder="Company"
                      defaultValue={record.company}
                      onChange={(e) => this.updateCompany(e, record.id)}
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
                <button
                  onClick={() => {
                    this.deleteExperience(record.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
          <button onClick={this.addExperience}>Add Experience</button>
        </div>
      );
    } else if (this.state.records.length <= 0) {
      return "";
    } else {
      return (
        <div id="experience">
          <h1>Experience</h1>
          {this.state.records.map((record) => {
            if (record.company.length < 2 && record.detail.length < 2)
              return "";
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
}
