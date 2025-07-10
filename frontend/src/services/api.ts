import type { ResultadoBusca, Filme } from '../types';

const API = 'http://localhost:8080';

export async function buscarFilmesPorTermo(
  termo: string,
  pagina = 1
): Promise<ResultadoBusca> {
  const res = await fetch(
    `${API}/filmes/busca?termo=${encodeURIComponent(termo)}&pagina=${pagina}`
  );
  if (!res.ok) throw new Error('Erro ao buscar filmes');
  return res.json();
}

export async function buscarFilmePorId(id: string): Promise<Filme> {
  const res = await fetch(`${API}/filmes/${encodeURIComponent(id)}`);
  if (!res.ok) throw new Error(`Filme ${id} não encontrado`);
  return res.json();
}

export async function buscarCatalogo(
    termo: string = '',
    pagina: number = 1
): Promise<ResultadoBusca> {
    const url = `${API}/filmes/busca?termo=${encodeURIComponent(termo)}&pagina=${pagina}`;
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error(`Erro ao buscar catálogo: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json();
  
    return {
      Search: data.Search as Filme[],
      TotalResults: data.totalResults,
      Response: data.Response,
    };
}