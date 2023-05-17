import React, { useState } from "react";
export default function Skills(props) {
  const [skills, setSkills] = useState([
    { id: 0, title: "Verbal and written communication" },
    { id: 1, title: "Organization and Planning" },
  ]);
  const [lastID, setLastID] = useState(1);
  function deleteSkill(id) {
    setSkills(
      skills.filter((skill) => {
        return skill.id !== id;
      })
    );
  }
  function addSkill() {
    setSkills([...skills, { id: lastID + 1, title: "" }]);
    setLastID(lastID + 1);
  }
  function updateSkill(e, id) {
    const newTitle = e.target.value;
    const skillsCopy = skills.slice();
    skillsCopy.forEach((skill) => {
      if (skill.id === id) skill.title = newTitle;
    });
    setSkills(skillsCopy);
  }
  if (props.mode === "edit")
    return (
      <div id="skills" className="edit">
        <h1>Skills</h1>
        {skills.map((skill) => {
          return (
            <div className="skill" key={skill.id}>
              <input
                defaultValue={skill.title}
                onChange={(e) => {
                  updateSkill(e, skill.id);
                }}
              ></input>
              <button onClick={() => deleteSkill(skill.id)}>Delete</button>
            </div>
          );
        })}
        <button onClick={addSkill}>Add Skill</button>
      </div>
    );
  else if (skills.length < 1) return "";
  else
    return (
      <div id="skills">
        <h1>Skills</h1>
        <div>
          {skills.map((skill) => {
            if (skill.title.length < 1) return "";
            return <p key={skill.id}>{skill.title}</p>;
          })}
        </div>
      </div>
    );
}
