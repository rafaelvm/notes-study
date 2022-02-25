import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./styles.css";

function NoteList({ notes }) {
  return (
    <ul className="lista-notas">
      {notes.map((item, index) => {
        return (
          <li className="lista-notas_item" key={index}>
            <NoteCard titulo={item.title} description={item.note} />
          </li>
        );
      })}
    </ul>
  );
}

export default NoteList;
