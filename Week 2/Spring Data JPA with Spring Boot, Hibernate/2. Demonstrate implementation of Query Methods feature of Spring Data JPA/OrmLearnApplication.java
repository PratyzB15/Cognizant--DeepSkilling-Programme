package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryService countryService;

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(OrmLearnApplication.class, args);

        countryService = context.getBean(CountryService.class);

        testSearchContaining();

        testSearchContainingSorted();

        testSearchStartingWith();
    }

    private static void testSearchContaining() {

        LOGGER.info("Countries containing 'ou'");

        List<Country> list =
                countryService.searchCountries("ou");

        list.forEach(country -> LOGGER.debug("{}", country));
    }

    private static void testSearchContainingSorted() {

        LOGGER.info("Countries containing 'ou' sorted");

        List<Country> list =
                countryService.searchCountriesSorted("ou");

        list.forEach(country -> LOGGER.debug("{}", country));
    }

    private static void testSearchStartingWith() {

        LOGGER.info("Countries starting with Z");

        List<Country> list =
                countryService.getCountriesStartingWith("Z");

        list.forEach(country -> LOGGER.debug("{}", country));
    }

}