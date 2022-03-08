import React, { useState } from "react";
import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import Textarea from "../Textarea/Textarea";
import NoteList from "../NoteList/NoteList";
import { FormContainer } from "./styles.jsx";

function Form() {
  const [note, setNote] = useState({ title: "", description: "" });
  const [itemsList, setItemsList] = useState([]);

  function handleTitle(event) {
    setNote((prevState) => ({ ...prevState, title: event.target.value }));
  }

  function handleDescription(event) {
    setNote((prevState) => ({ ...prevState, description: event.target.value }));
  }

  function sendForm() {
    if (note.title && note.description) {
      setItemsList((prevState) => [...prevState, note]);
      setNote({ title: "", description: "" });
    }
  }

  function removeNote(note) {
    const newArray = itemsList.filter((item) => item.title !== note.title);
    setItemsList(newArray);
  }

  return (
    <>
      <FormContainer >
        <InputText
          placeholder="Escreva sua título"
          value={note.title}
          onChange={handleTitle}
        />
        <Textarea
          placeholder="Escreva sua nota"
          rows="16"
          value={note.description}
          onChange={handleDescription}
          maxLength="255"
        />
        <Button
          labelDescription="Criar nota"
          onClick={sendForm}
          type="button"
        />
      </FormContainer>
      <NoteList notes={itemsList} remove={removeNote}></NoteList>
    </>
  );
}

export default Form;
