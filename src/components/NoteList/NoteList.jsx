import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import { NoteListContainer, NoteListItem } from "./styles.jsx";

function NoteList({ notes, remove }) {
  return (
    <NoteListContainer>
      {notes.map((item, index) => {
        return (
          <NoteListItem key={index} onClick={() => remove(item)}>
            <NoteCard titulo={item.title} description={item.description} />
          </NoteListItem>
        );
      })}
    </NoteListContainer>
  );
}

export default NoteList;
