package com.cognizant.ormlearn;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.exception.CountryNotFoundException;
import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

    private static CountryService countryService;

    public static void main(String[] args) throws Exception {

        ApplicationContext context =
                SpringApplication.run(OrmLearnApplication.class, args);

        countryService = context.getBean(CountryService.class);

        getAllCountries();

        findCountry();

        addCountry();

        updateCountry();

        deleteCountry();

        searchCountry();

    }

    private static void getAllCountries() {

        System.out.println("-----ALL COUNTRIES-----");

        List<Country> list = countryService.getAllCountries();

        list.forEach(System.out::println);

    }

    private static void findCountry() throws CountryNotFoundException {

        System.out.println("\n-----FIND COUNTRY-----");

        Country c = countryService.findCountryByCode("IN");

        System.out.println(c);

    }

    private static void addCountry() throws CountryNotFoundException {

        System.out.println("\n-----ADD COUNTRY-----");

        Country country = new Country("ZZ", "MyCountry");

        countryService.addCountry(country);

        System.out.println(countryService.findCountryByCode("ZZ"));

    }

    private static void updateCountry() throws CountryNotFoundException {

        System.out.println("\n-----UPDATE COUNTRY-----");

        countryService.updateCountry("ZZ", "Updated Country");

        System.out.println(countryService.findCountryByCode("ZZ"));

    }

    private static void deleteCountry() {

        System.out.println("\n-----DELETE COUNTRY-----");

        countryService.deleteCountry("ZZ");

        System.out.println("Country Deleted");

    }

    private static void searchCountry() {

        System.out.println("\n-----SEARCH COUNTRY-----");

        List<Country> list = countryService.searchCountry("Ind");

        list.forEach(System.out::println);

    }

}