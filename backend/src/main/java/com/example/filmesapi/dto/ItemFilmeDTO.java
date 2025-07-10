package com.example.filmesapi.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ItemFilmeDTO {

    @JsonProperty("Title")
    private String title;

    @JsonProperty("Year")
    private String year;

    @JsonProperty("imdbID")
    private String imdbId;


    @JsonProperty("Poster")
    private String poster;
    public ItemFilmeDTO(String title, String year, String imdbId, String poster) {
        this.title = title;
        this.year = year;
        this.imdbId = imdbId;
        this.poster = poster;
    }
}