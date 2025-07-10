import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/buscabar.css';

export default function BuscaBar() {
  const [termo, setTermo] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!termo.trim()) return;
    navigate(`/busca?termo=${encodeURIComponent(termo)}&pagina=1`);
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        className="input"
        type="text"
        placeholder="Pesquisar filmes..."
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
      />
      <button className="button" type="submit">
        Buscar
      </button>
    </form>
  );
}
