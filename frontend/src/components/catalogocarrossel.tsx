import '../styles/catalogocarrossel.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Filme } from '../types';
import { FilmeCard } from './filmecard';
import { useRef } from 'react';

interface Props {
  filmes: Filme[];
  titulo: string;
}

export default function CatalogoCarrossel({ titulo, filmes }: Props) {
  const refLista = useRef<HTMLDivElement>(null);

  const scroll = (delta: number) => {
    refLista.current?.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section className="carrossel">
      <h2 className="titulo">{titulo}</h2>

      <button
        className="arrowLeft"
        onClick={() => scroll(-300)}
        aria-label="Voltar"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="lista" ref={refLista}>
        {filmes.map((f) => (
          <FilmeCard key={f.ImdbId} filme={f} />
        ))}
      </div>

      <button
        className="arrowRight"
        onClick={() => scroll(300)}
        aria-label="Avançar"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}