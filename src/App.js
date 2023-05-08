import React from "react";
import Education from "./components/education";
import Experience from "./components/experience";
import General from "./components/general";
import Skills from "./components/skills";
import "./styles/app.css";
import * as html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: "saved" };
    this.toggleMode = this.toggleMode.bind(this);
    this.handleEditBtnClick = this.handleEditBtnClick.bind(this);
    this.printDocument = this.printDocument.bind(this);
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
  printDocument() {
    const input = document.getElementById("cv");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.output("dataurlnewwindow");
      pdf.save("download.pdf");
    });
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
        <button id="download" onClick={this.printDocument}>
          Download PDF
        </button>
        <div id="cv">
          <General mode={this.state.mode}></General>
          <Education mode={this.state.mode}></Education>
          <Experience mode={this.state.mode}></Experience>
          <Skills mode={this.state.mode}></Skills>
        </div>
      </div>
    );
  }
}
