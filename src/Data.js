import style from "./style.module.css";

function Data(props) {
  return (
    <>
      <div onClick={props.newNote} className={style.navBar}>
        Note +
      </div>
      {props.note.map((notes) => (
        <p key={notes.id} onClick={() => props.setCurrentId(notes.id)}>
          Note {notes.id}
        </p>
      ))}
    </>
  );
}

export default Data;
