import React from "react";
import Education from "./components/education";
import Experience from "./components/experience";
import General from "./components/general";
import Skills from "./components/skills";
import "./styles/app.css";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: "saved" };
    this.toggleMode = this.toggleMode.bind(this);
    this.handleEditBtnClick = this.handleEditBtnClick.bind(this);
  }
  handleEditBtnClick(e) {
    this.toggleEditBtn(e.target);
    this.toggleMode();
  }
  toggleMode() {
    this.setState((state) => {
      if (state.mode === "saved") return { mode: "edit" };
      else return { mode: "saved" };
    });
  }
  toggleEditBtn(btn) {
    btn.textContent = btn.textContent === "SAVE" ? "EDIT" : "SAVE";
    btn.className = btn.className === "save" ? "edit" : "save";
  }
  render() {
    return (
      <div>
        <button
          id="edit-save"
          className="saved"
          onClick={(e) => this.handleEditBtnClick(e)}
        >
          EDIT
        </button>
        <General mode={this.state.mode}></General>
        <Education mode={this.state.mode}></Education>
        <Experience mode={this.state.mode}></Experience>
        <Skills mode={this.state.mode}></Skills>
      </div>
    );
  }
}
