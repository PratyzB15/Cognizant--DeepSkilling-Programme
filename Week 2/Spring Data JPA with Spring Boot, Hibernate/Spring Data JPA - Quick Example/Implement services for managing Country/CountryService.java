package com.cognizant.ormlearn.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.ormlearn.exception.CountryNotFoundException;
import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional(readOnly = true)
    public List<Country> getAllCountries() {

        return countryRepository.findAll();

    }

    @Transactional
    public Country findCountryByCode(String code)
            throws CountryNotFoundException {

        Optional<Country> result = countryRepository.findById(code);

        if (!result.isPresent()) {

            throw new CountryNotFoundException("Country Not Found");

        }

        return result.get();

    }

    @Transactional
    public void addCountry(Country country) {

        countryRepository.save(country);

    }

    @Transactional
    public void updateCountry(String code, String name)
            throws CountryNotFoundException {

        Optional<Country> result = countryRepository.findById(code);

        if (!result.isPresent()) {

            throw new CountryNotFoundException("Country Not Found");

        }

        Country country = result.get();

        country.setName(name);

        countryRepository.save(country);

    }

    @Transactional
    public void deleteCountry(String code) {

        countryRepository.deleteById(code);

    }

    @Transactional(readOnly = true)
    public List<Country> searchCountry(String text) {

        return countryRepository.findByNameContainingIgnoreCase(text);

    }

}