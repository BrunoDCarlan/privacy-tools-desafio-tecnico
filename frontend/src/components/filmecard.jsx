import React from 'react';
import '../styles/filmecard.css';

export function FilmeCard({ filme }) {
  return (
    <div className="card">
      <img
        src={filme.Poster}
        alt={filme.Title}
        className="poster"
        loading="lazy"
      />
      <div className="info-overlay">
        <h3 className="title-filmecard">{filme.Title}</h3>
        <span className="year">({filme.Year})</span>
      </div>
    </div>
  );
}
