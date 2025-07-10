import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useFavorites } from '../hooks/usefavorites';
import '../styles/filmecard.css';

export function FilmeCard({ filme }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const fav = isFavorite(filme.imdbID);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (fav) removeFavorite(filme.imdbID);
    else    addFavorite(filme.imdbID);
  };

  return (
    <div className="card">
      <button
        className="favorite-btn"
        onClick={toggleFavorite}
        aria-label={fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        <Heart stroke={fav ? '#e50914' : '#fff'} />
      </button>

      <Link to={`/filme/${filme.imdbID}`} className="link-reset">
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
      </Link>
    </div>
  );
}