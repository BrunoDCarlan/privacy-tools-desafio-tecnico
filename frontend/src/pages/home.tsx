import { useEffect, useState } from 'react'
import type { Filme } from '../types'
import { buscarCatalogo } from '../services/api'
import BuscaBar from '../components/buscabar'
import CatalogoCarrossel from '../components/catalogocarrossel'
import '../styles/home.css'

export default function Home() {
    const termos = ['Space', 'Matrix']
    const [dados, setDados] = useState<Record<string, Filme[]>>({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const mapa: Record<string, Filme[]> = {}
            for (const termo of termos) {
                try {
                    const resp = await buscarCatalogo(termo, 1)
                    mapa[termo] = resp.Search
                } catch {
                    mapa[termo] = []
                }
            }
            setDados(mapa)
            setLoading(false)
        })()
    }, [])

    return (
        <div className="container">
            <div className="content">
                <h1 className="title">Catálogo</h1>
                <BuscaBar />

                {loading && <p className="text-white text-center">Carregando catálogos…</p>}

                {!loading &&
                    termos.map((t) => (
                        <CatalogoCarrossel
                            key={t}
                            titulo={t}
                            filmes={dados[t] || []}
                        />
                    ))}
            </div>
        </div>
    )
}
