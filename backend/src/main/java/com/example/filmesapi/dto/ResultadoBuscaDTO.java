package com.example.filmesapi.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class ResultadoBuscaDTO {

    @JsonProperty("Search")
    private List<ItemFilmeDTO> results;

    @JsonProperty("totalResults")
    private String totalResults;

    @JsonProperty("Response")
    private String response;

    public ResultadoBuscaDTO(List<ItemFilmeDTO> results, String totalResults, String response) {
        this.results = results;
        this.totalResults = totalResults;
        this.response = response;
    }
}
