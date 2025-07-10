export interface Filme {
    ImdbId: string;
    Title: string;
    Year: string;
    Poster: string;
    Type: string;
    Genre: string;
    Director?: string;
    Plot?: string;
}

export type ResultadoBusca = {
    Search: Filme[];
    TotalResults: string;
    Response: string;
};