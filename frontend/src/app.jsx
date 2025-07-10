import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ResultadoPesquisa from './pages/resultadospesquisa';
import DetalheFilme from './pages/detalhefilme'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/busca" element={<ResultadoPesquisa />} />
      <Route path="/filme/:id" element={<DetalheFilme />} />
    </Routes>
  );
}