package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public BookService() {
        System.out.println("BookService Bean Created.");
    }

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook() {

        System.out.println("BookService is processing request...");

        bookRepository.saveBook();

        System.out.println("Spring IoC Container configured successfully.");

    }

}