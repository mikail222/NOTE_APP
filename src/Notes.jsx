import React from "react";
import "./App.css";
import { randomBg } from "./utils";

const Notes = ({ setSelectedNote, notes, counter }) => {
  return (
    <aside className="notes">
      <h1>Notes</h1>
      <p style={{ marginTop: "5px" }}>
        {notes.length === 0 && `Bismillah ${counter}`}
      </p>

      {notes.length
        ? notes.map((note) => (
            <div
              key={note.title}
              onClick={() => setSelectedNote(note)}
              style={{
                backgroundColor: randomBg(),
                padding: "2px",
                margin: "8px",
              }}
            >
              <h3>{note.title}</h3>
              <p>{note.date.toLocaleDateString()}</p>
            </div>
          ))
        : "Loading..."}
    </aside>
  );
};

export default Notes;
