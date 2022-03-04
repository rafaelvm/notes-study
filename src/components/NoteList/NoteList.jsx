import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./styles.css";

function NoteList({ notes, remove }) {
  return (
    <ul className="lista-notas">
      {notes.map((item, index) => {
        return (
          <li
            className="lista-notas_item"
            key={index}
            onClick={() => remove(item)}
          >
            <NoteCard titulo={item.title} description={item.description} />
          </li>
        );
      })}
    </ul>
  );
}

export default NoteList;
