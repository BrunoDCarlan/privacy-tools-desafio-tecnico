import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { buscarFilmesPorTermo } from '../services/api';
import { FilmeCard } from '../components/filmecard';
import '../styles/resultadopesquisa.css';

export default function ResultadoPesquisa() {
  const { search } = useLocation();
  const params     = new URLSearchParams(search);
  const termo      = params.get('termo') || '';
  const pagina     = Number(params.get('pagina') || '1');

  const [resultados, setResultados] = useState([]);
  const [erro,       setErro]       = useState(null);
  const [loading,    setLoading]    = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setErro(null);
      try {
        const data = await buscarFilmesPorTermo(termo, pagina);
        setResultados(data.Search);
      } catch {
        setErro('Erro ao buscar resultados');
      } finally {
        setLoading(false);
      }
    })();
  }, [termo, pagina]);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h2 className="title">Resultados para “{termo}”</h2>
      {loading && <p>Carregando…</p>}
      {erro    && <p className="error">{erro}</p>}
      <div className="grid">
        {resultados.map((f) => (
          <FilmeCard key={f.imdbID} filme={f} />
        ))}
      </div>
    </div>
  );
}
