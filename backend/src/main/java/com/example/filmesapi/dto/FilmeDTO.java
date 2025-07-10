package com.example.filmesapi.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FilmeDTO {
    @JsonProperty("Title")
    private String title;

    @JsonProperty("Year")
    private String year;

    @JsonProperty("Genre")
    private String genre;

    @JsonProperty("Director")
    private String director;

    @JsonProperty("Plot")
    private String plot;

    @JsonProperty("Poster")
    private String poster;

    @JsonProperty("Type")
    private String type;

    @JsonProperty("imdbID")
    private String imdbId;

    public FilmeDTO(String title, String year, String genre, String director, String plot, String poster, String type, String imdbId) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.director = director;
        this.plot = plot;
        this.poster = poster;
        this.type = type;
        this.imdbId = imdbId;
    }
}
