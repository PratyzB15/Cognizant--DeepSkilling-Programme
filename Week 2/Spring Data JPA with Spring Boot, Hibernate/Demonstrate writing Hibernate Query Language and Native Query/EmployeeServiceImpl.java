package com.example.ormlearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ormlearn.entity.Employee;
import com.example.ormlearn.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    @Override
    public List<Employee> getAllPermanentEmployees() {
        return repository.getAllPermanentEmployees();
    }

    @Override
    public List<Employee> getAllPermanentEmployeesFetch() {
        return repository.getAllPermanentEmployeesFetch();
    }

    @Override
    public Double getAverageSalary(int departmentId) {
        return repository.getAverageSalary(departmentId);
    }

    @Override
    public List<Employee> getAllEmployeesNative() {
        return repository.getAllEmployeesNative();
    }
}

