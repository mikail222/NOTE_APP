import React from "react";

const NoteDisplay = ({ selectedNote }) => {
  const defaulttext = "open new note...";
  return (
    <section className="NoteDisplay">
      <h1>Notes</h1>
      {selectedNote === null ? (
        <div className="default">{defaulttext}</div>
      ) : (
        <div className="div">
          <h3>{selectedNote.title}</h3>
          <span>
            <em>{selectedNote.content}</em>
          </span>
          <br />
          <p className="marginalise">
            {selectedNote.date.toLocaleDateString()}
          </p>
        </div>
      )}
    </section>
  );
};

export default NoteDisplay;
