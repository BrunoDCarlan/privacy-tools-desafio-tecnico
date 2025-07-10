import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Filme } from '../types';
import { FilmeCard } from './filmecard';

interface Props {
  filmes: Filme[];
  titulo: string;
}

export default function CatalogoCarrossel({ titulo, filmes }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} arrow arrowRight`}
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          right: '-25px',
        }}
        onClick={onClick}
        aria-label="Avançar"
      >
        <ChevronRight size={24} />
      </button>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} arrow arrowLeft`}
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          left: '-25px',
          zIndex: 1,
        }}
        onClick={onClick}
        aria-label="Voltar"
      >
        <ChevronLeft size={24} />
      </button>
    );
  }

  return (
    <section className="carrossel">
      <h2 className="titulo">{titulo}</h2>
      <Slider {...settings}>
        {filmes.map((f) => (
          <div key={f.imdbID}>
            <Link to={`/filme/${f.imdbID}`} className="link-reset">
              <FilmeCard filme={f} />
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
}