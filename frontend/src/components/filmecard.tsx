import type { Filme } from '../types';
import '../styles/filmecard.css';

export function FilmeCard({ filme }: { filme: Filme }) {
  return (
    <div className="card">
      <img
        src={filme.Poster}
        alt={filme.Title}
        className="poster"
      />
      <div className="info-overlay">
        <h3 className="title-filmecard">
          {filme.Title}
        </h3>
        <span className="year">({filme.Year})</span>
      </div>
    </div>
  );
}