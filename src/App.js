import { useState } from "react";
import "./App.css";
import Data from "./Data";
import DisplayNotes from "./DisplayData";
import Header from "./Header";
import style from "./style.module.css";
function App() {
  const [note, addNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState();
  const createNewNote = () => {
    addNotes((prevNote) => [
      ...prevNote,
      { id: prevNote.length + 1, body: `My notes ${prevNote.length + 1}` },
    ]);
    setCurrentNoteId(note.length + 1);
  };
  const setCurrentId = (id) => {
    setCurrentNoteId(id);
  };
  const setCurrentNotes = (e) => {
    const updatedNotes = note.map((notes) =>
      notes.id === currentNoteId
        ? { id: notes.id, body: e.target.value }
        : notes
    );
    addNotes(updatedNotes);
  };

  return (
    <>
      <Header />
      {note.length > 0 ? (
        <>
          <Data
            note={note}
            newNote={createNewNote}
            setCurrentId={setCurrentId}
          />
          <DisplayNotes
            note={note}
            currentNoteId={currentNoteId}
            setCurrentNotes={setCurrentNotes}
          />
        </>
      ) : (
        <div onClick={createNewNote} className={style.newOne}>
          {" "}
          Create a new One +{" "}
        </div>
      )}
    </>
  );
}

export default App;
