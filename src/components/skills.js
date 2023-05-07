import React from "react";
export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        { id: 0, title: "Verbal and written communication" },
        { id: 1, title: "Organization and Planning" },
      ],
      lastID: 1,
    };
    this.deleteSkill = this.deleteSkill.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.updateSkill = this.updateSkill.bind(this);
  }
  deleteSkill(id) {
    this.setState((state) => {
      return {
        skills: state.skills.filter((skill) => {
          return skill.id !== id;
        }),
      };
    });
  }
  addSkill() {
    this.setState((state) => {
      return {
        skills: [...state.skills, { id: state.lastID + 1, title: "" }],
        lastID: state.lastID + 1,
      };
    });
  }
  updateSkill(e, id) {
    const newTitle = e.target.value;
    this.setState((state) => {
      const skillsCopy = state.skills.slice();
      skillsCopy.forEach((skill) => {
        if (skill.id === id) skill.title = newTitle;
      });
      return {
        skills: skillsCopy,
      };
    });
  }
  render() {
    if (this.props.mode === "edit")
      return (
        <div id="skills" className="edit">
          <h1>Skills</h1>
          {this.state.skills.map((skill) => {
            return (
              <div className="skill" key={skill.id}>
                <input
                  defaultValue={skill.title}
                  onChange={(e) => {
                    this.updateSkill(e, skill.id);
                  }}
                ></input>
                <button onClick={() => this.deleteSkill(skill.id)}>
                  Delete
                </button>
              </div>
            );
          })}
          <button onClick={() => this.addSkill()}>Add Skill</button>
        </div>
      );
    else if (this.state.skills.length < 1) return "";
    else
      return (
        <div id="skills">
          <h1>Skills</h1>
          <div>
            {this.state.skills.map((skill) => {
              if (skill.title.length < 1) return "";
              return <p key={skill.id}>{skill.title}</p>;
            })}
          </div>
        </div>
      );
  }
}
