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
      <h3 className="title">
        {filme.Title} <span className="year">({filme.Year})</span>
      </h3>
    </div>
  );
}
