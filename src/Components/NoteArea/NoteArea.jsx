import React, { useState } from "react";
import "./NoteArea.css";
function NoteArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handelChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title:"",
      content:"",
    })
    event.preventDefault();
  }
  return (
    <>
      <div className="note-container">
        <form>
          <input
            name="title"
            onChange={handelChange}
            value={note.title}
            placeholder="Title"
          />
          <textarea
            name="content"
            onChange={handelChange}
            value={note.content}
            placeholder="Take a note..."
            rows="3"
          />
          <button onClick={submitNote}>Add</button>
        </form>
      </div>
    </>
  );
}

export default NoteArea;
