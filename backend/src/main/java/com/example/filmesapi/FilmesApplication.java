package com.example.filmesapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class FilmesApplication {

	public static void main(String[] args) {
		SpringApplication.run(FilmesApplication.class, args);
	}

}
