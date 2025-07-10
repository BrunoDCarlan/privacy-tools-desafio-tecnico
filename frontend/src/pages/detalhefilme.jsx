import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { buscarFilmePorId } from '../services/api';
import '../styles/detalhefilme.css';

export default function DetalheFilme() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    (async () => {
      setLoading(true);
      try {
        const data = await buscarFilmePorId(id);
        setFilme(data);
      } catch (e) {
        setErro(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p className="p-6 text-white">Carregando...</p>;
  if (erro)   return <p className="p-6 text-red-500">{erro}</p>;
  if (!filme) return null;

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <Link to="/" className="text-red-500 hover:underline mb-4 block">
        ← Voltar
      </Link>
      <div className="container">
        <img src={filme.Poster} alt={filme.Title} className="poster" />
        <div className="info">
          <h1 className="title">
            {filme.Title} ({filme.Year})
          </h1>
          <p className="meta">
            <strong>Gênero:</strong> {filme.Genre}  
            <strong> • Diretor:</strong> {filme.Director}
          </p>
          <p className="plot">{filme.Plot}</p>
        </div>
      </div>
    </div>
  );
}
