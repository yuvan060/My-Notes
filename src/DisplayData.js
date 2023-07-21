function DisplayNotes(props) {
  const setNote = () => {
    for (let i = 0; i < props.note.length; i++) {
      if (props.note[i].id === props.currentNoteId) {
        return props.note[i].body;
      }
    }
  };
  return (
    <>
      <textarea value={setNote()} onChange={(e) => props.setCurrentNotes(e)} />
    </>
  );
}

export default DisplayNotes;
