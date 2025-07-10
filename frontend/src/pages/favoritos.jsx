import React, { useEffect, useState } from 'react';
import { buscarFilmePorId } from '../services/api';
import { useFavorites } from '../hooks/usefavorites';
import { FilmeCard } from '../components/filmecard';
import '../styles/favoritos.css';

export default function Favoritos() {
  const { favorites, removeFavorite } = useFavorites();
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (favorites.length === 0) {
        setFilmes([]);
        setLoading(false);
        return;
      }
      try {
        const results = await Promise.all(
          favorites.map((id) => buscarFilmePorId(id))
        );
        setFilmes(results);
      } catch {
        setFilmes([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [favorites]);

  if (loading) {
    return <p className="p-6 text-white text-center">Carregando favoritos…</p>;
  }

  if (filmes.length === 0) {
    return (
      <p className="p-6 text-white text-center">
        Você ainda não adicionou nenhum favorito.
      </p>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h2 className="title">Meus Favoritos</h2>
      <div className="grid">
        {filmes.map((f) => (
          <div key={f.imdbID} className="favorito-card">
            <FilmeCard filme={f} />
            <button
              className="btn-remove"
              onClick={() => removeFavorite(f.imdbID)}
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}