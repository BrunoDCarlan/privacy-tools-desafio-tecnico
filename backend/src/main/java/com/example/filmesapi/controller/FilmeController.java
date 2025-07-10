package com.example.filmesapi.controller;

import com.example.filmesapi.dto.FilmeDTO;
import com.example.filmesapi.dto.ResultadoBuscaDTO;
import com.example.filmesapi.service.FilmeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/filmes")
@Tag(name = "Filmes", description = "API de consulta de filmes na OMDb")
public class FilmeController {

    private final FilmeService filmeService;

    public FilmeController(FilmeService filmeService) {
        this.filmeService = filmeService;
    }

    @Operation(summary = "Buscar filme por título", description = "Busca completa os dados do filme por título, ano, tipo e enredo (plot)")
    @GetMapping
    public FilmeDTO buscarFilme(
        @RequestParam String title,
        @RequestParam(required = false) String year,
        @RequestParam(required = false) String type,
        @RequestParam(required = false) String plot ) {
        return filmeService.procurarFilme(title, year, type, plot);
    }

    @Operation(summary = "Buscar filme por ID", description = "Busca detalhes completos de um filme via ID do IMDb")
    @GetMapping("/{id}")
    public FilmeDTO buscarPorId(@PathVariable String id) {
        return filmeService.buscarPorId(id);
    }

    @Operation(summary = "Listar filmes por termo de busca", description = "Retorna lista paginada de filmes que batem com o termo")
    @GetMapping("/busca")
    public ResultadoBuscaDTO buscarListagem(
        @RequestParam String termo,
        @RequestParam(defaultValue = "1") int pagina
    ) {
        return filmeService.buscarLista(termo, pagina);
    }
}
