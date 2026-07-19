package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository constructorRepository;
    private BookRepository setterRepository;

    // Constructor Injection
    public BookService(BookRepository constructorRepository) {
        this.constructorRepository = constructorRepository;
    }

    // Setter Injection
    public void setSetterRepository(BookRepository setterRepository) {
        this.setterRepository = setterRepository;
    }

    public void issueBook() {

        System.out.println("BookService Started");

        System.out.println("\nUsing Constructor Injection:");
        constructorRepository.displayBook();

        System.out.println("\nUsing Setter Injection:");
        setterRepository.displayBook();

        System.out.println("\nBook Issued Successfully!");

    }

}