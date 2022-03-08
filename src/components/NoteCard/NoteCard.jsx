import React from "react";
import {
  NoteCardContainer,
  NoteCardHeader,
  NoteCardTitle,
  NoteCardText,
} from "./styles.jsx";

function NoteCard({ titulo, description }) {
  return (
    <NoteCardContainer>
      <NoteCardHeader>
        <NoteCardTitle>{titulo}</NoteCardTitle>
      </NoteCardHeader>
      <NoteCardText>{description}</NoteCardText>
    </NoteCardContainer>
  );
}

export default NoteCard;
