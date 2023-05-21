import React, { useState } from "react";
import Education from "./components/education";
import Experience from "./components/experience";
import General from "./components/general";
import Skills from "./components/skills";
import "./styles/app.css";
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
    const doc = new jsPDF();
    const elementHTML = document.querySelector("#cv");
    doc.html(elementHTML, {
      callback: function (doc) {
        doc.save("sample-document.pdf");
      },
      x: 20,
      y: 20,
      width: 170, //target width in the PDF document
      windowWidth: 794, //window width in CSS pixels
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
