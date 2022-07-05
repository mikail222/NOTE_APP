import React, { useEffect, useState } from "react";
import NoteDisplay from "./NoteDisplay";
import Notes from "./Notes";
import "./App.css";

const App = () => {
  const [selectedNote, setSelectedNote] = React.useState(null);
  const [notes, setNotes] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const defaultNotes = [
      {
        title: "Coding made easy",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, atque laborum, nesciunt reprehenderit a ratione animi blanditiis et ea tenetur, repudiandae pariatur libero illo repellendus? Blanditiis eligendi dicta deserunt et?",
        date: new Date(),
        id: 1,
      },
      {
        title: "Hard at First",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, atque laborum, nesciunt reprehenderit a ratione animi blanditiis et ea tenetur, repudiandae pariatur libero illo repellendus? Blanditiis eligendi dicta deserunt et?",
        date: new Date(),
        id: 2,
      },
      {
        title: "Confidence is all you need",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, atque laborum, nesciunt reprehenderit a ratione animi blanditiis et ea tenetur, repudiandae pariatur libero illo repellendus? Blanditiis eligendi dicta deserunt et?",
        date: new Date(),
        id: 3,
      },
      {
        title: "Conqer the  fatique",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, atque laborum, nesciunt reprehenderit a ratione animi blanditiis et ea tenetur, repudiandae pariatur libero illo repellendus? Blanditiis eligendi dicta deserunt et?",
        date: new Date(),
        id: 4,
      },
    ];
    setTimeout(() => {
      setNotes(defaultNotes);
    }, 7000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevcounter) => prevcounter + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <Notes
        setSelectedNote={setSelectedNote}
        notes={notes}
        counter={counter}
      />
      <NoteDisplay selectedNote={selectedNote} notes={notes} />
    </div>
  );
};

export default App;
