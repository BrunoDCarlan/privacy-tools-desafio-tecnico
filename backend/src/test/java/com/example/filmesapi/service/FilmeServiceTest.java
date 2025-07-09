package com.example.filmesapi.service;

import com.example.filmesapi.dto.FilmeDTO;
import com.example.filmesapi.dto.ResultadoBuscaDTO;
import com.example.filmesapi.exception.FilmeNaoEncontradoException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class FilmeServiceTest {

    @Autowired
    private FilmeService filmeService;

    @Test
    void testBuscarFilmePorTituloValido() {
        FilmeDTO filme = filmeService.procurarFilme("Inception", "2010", "movie", "short");
        assertNotNull(filme);
        assertEquals("Inception", filme.getTitle());
    }

    @Test
    void testBuscarFilmePorIdValido() {
        FilmeDTO filme = filmeService.buscarPorId("tt1375666"); // ID do Inception
        assertNotNull(filme);
        assertEquals("Inception", filme.getTitle());
    }

    @Test
    void testBuscarListaFilmes() {
        ResultadoBuscaDTO resultado = filmeService.buscarLista("batman", 1);
        assertNotNull(resultado);
        assertTrue(resultado.getResults().size() > 0);
    }

    @Test
    void testFilmeNaoEncontrado() {
        assertThrows(FilmeNaoEncontradoException.class, () -> {
            filmeService.procurarFilme("asdqweqweqwe", null, null, null);
        });
    }

    @Test
    void testFilmeNaoExisteDevolveExcecao() {
        assertThrows(FilmeNaoEncontradoException.class, () -> {
            filmeService.procurarFilme("titulofakeinexistente", null, null, null);
        });
    }

    @Test
    void testBuscarPorIdInvalido() {
        assertThrows(FilmeNaoEncontradoException.class, () -> {
            filmeService.buscarPorId("idfakeinvalido");
        });
    }

    @Test
    void testBuscarListaInexistente() {
        assertThrows(FilmeNaoEncontradoException.class, () -> {
            filmeService.buscarLista("asdjksadksajd", 1);
        });
    }
}
