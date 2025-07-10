import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import ResultadoPesquisa from './pages/resultadospesquisa';
import DetalheFilme from './pages/detalhefilme'
import Favoritos from './pages/favoritos';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busca" element={<ResultadoPesquisa />} />
        <Route path="/filme/:id" element={<DetalheFilme />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </>
  );
}