import React, { useState } from "react";
import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import Textarea from "../Textarea/Textarea";
import "./styles.css";
import NoteList from "../NoteList/NoteList";

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
    }
  }

  return (
    <>
      <form className="form-cadastro">
        <InputText
          className="form-cadastro_input"
          placeholder="Escreva sua título"
          value={note.title}
          onChange={handleTitle}
        />
        <Textarea
          placeholder="Escreva sua nota"
          className="form-cadastro_input"
          rows="16"
          value={note.description}
          onChange={handleDescription}
          maxLength="255"
        />
        <Button
          className="form-cadastro_input form-cadastro_submit"
          labelDescription="Criar nota"
          onClick={sendForm}
          type="button"
        />
      </form>
      <NoteList notes={itemsList}></NoteList>
    </>
  );
}

export default Form;
