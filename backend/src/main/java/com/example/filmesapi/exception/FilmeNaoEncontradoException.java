package com.example.filmesapi.exception;

public class FilmeNaoEncontradoException extends RuntimeException {
    public FilmeNaoEncontradoException(String mensagem) {
        super(mensagem);
    }
}