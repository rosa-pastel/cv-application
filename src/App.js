import React, { useState } from "react";
import Education from "./components/education";
import Experience from "./components/experience";
import General from "./components/general";
import Skills from "./components/skills";
import "./styles/app.css";
import * as html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
export default function App() {
  const [mode, setMode] = useState("saved");
  function handleEditBtnClick(e) {
    toggleEditBtn(e.target);
    toggleMode();
  }
  function toggleMode() {
    if (mode === "saved") setMode("edit");
    else setMode("saved");
  }
  function toggleEditBtn(btn) {
    btn.textContent = btn.textContent === "SAVE" ? "EDIT" : "SAVE";
    btn.className = btn.className === "save" ? "edit" : "save";
  }
  function printDocument() {
    const input = document.getElementById("cv");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.output("dataurlnewwindow");
      pdf.save("download.pdf");
    });
  }
  return (
    <div>
      <button
        id="edit-save"
        className="saved"
        onClick={(e) => handleEditBtnClick(e)}
      >
        EDIT
      </button>
      <button id="download" onClick={printDocument}>
        Download PDF
      </button>
      <div id="cv">
        <General mode={mode}></General>
        <Education mode={mode}></Education>
        <Experience mode={mode}></Experience>
        <Skills mode={mode}></Skills>
      </div>
    </div>
  );
}
