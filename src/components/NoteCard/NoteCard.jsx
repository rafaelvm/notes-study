import React from "react";
import "./styles.css";

function NoteCard({ titulo, description }) {
  return (
    <section className="card-nota">
      <header className="card-nota_cabecalho">
        <h3 className="card-nota_titulo">{titulo}</h3>
      </header>
      <p className="card-nota_texto">{description}</p>
    </section>
  );
}

export default NoteCard;
