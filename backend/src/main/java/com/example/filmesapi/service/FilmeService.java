package com.example.filmesapi.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;

import com.example.filmesapi.exception.FilmeNaoEncontradoException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.example.filmesapi.dto.*;

@Service
public class FilmeService {

    @Value("${omdb.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();
    private final String BASE_URL = "http://www.omdbapi.com/";

    @Cacheable(
            value = "filmePorTitulo",
            key = "#title + '-' + (#year != null ? #year : '') + '-' + (#type != null ? #type : '') + '-' + (#plot != null ? #plot : 'short')"
    )
    public FilmeDTO procurarFilme(String title, String year, String type, String plot) {
        try {
            URI uri = UriComponentsBuilder
                    .newInstance()
                    .uri(new URI(BASE_URL))
                    .queryParam("apikey", apiKey)
                    .queryParam("t", title)
                    .queryParam("y", year != null ? year : "")
                    .queryParam("type", type != null ? type : "")
                    .queryParam("plot", plot != null ? plot : "short")
                    .build(true)
                    .toUri();

            FilmeDTO filme = restTemplate.getForObject(uri, FilmeDTO.class);

            if (filme == null || filme.getTitle() == null) {
                throw new FilmeNaoEncontradoException("Filme não encontrado com os parâmetros fornecidos.");
            }

            return filme;

        } catch (URISyntaxException e) {
            throw new RuntimeException("Erro ao montar URI", e);
        }
    }

    @Cacheable(value = "filmePorId", key = "#id")
    public FilmeDTO buscarPorId(String id) {
        try {
            URI uri = UriComponentsBuilder
                    .newInstance()
                    .uri(new URI(BASE_URL))
                    .queryParam("apikey", apiKey)
                    .queryParam("i", id)
                    .queryParam("plot", "full")
                    .build(true)
                    .toUri();

            FilmeDTO filme = restTemplate.getForObject(uri, FilmeDTO.class);

            if (filme == null || filme.getTitle() == null) {
                throw new FilmeNaoEncontradoException("Filme não encontrado com o ID fornecido.");
            }

            return filme;

        } catch (URISyntaxException e) {
            throw new RuntimeException("Erro ao montar URI", e);
        }
    }

    @Cacheable(value = "listaFilmes", key = "#termo + '-' + #pagina")
    public ResultadoBuscaDTO buscarLista(String termo, int pagina) {
        try {
            URI uri = UriComponentsBuilder
                    .newInstance()
                    .uri(new URI(BASE_URL))
                    .queryParam("apikey", apiKey)
                    .queryParam("s", termo)
                    .queryParam("page", pagina)
                    .build(true)
                    .toUri();

            ResultadoBuscaDTO filme = restTemplate.getForObject(uri, ResultadoBuscaDTO.class);

            if (filme == null || filme.getResults() == null) {
                throw new FilmeNaoEncontradoException("Filme não encontrado com o ID fornecido.");
            }

            return filme;

        } catch (URISyntaxException e) {
            throw new RuntimeException("Erro ao montar URI", e);
        }
    }
}
