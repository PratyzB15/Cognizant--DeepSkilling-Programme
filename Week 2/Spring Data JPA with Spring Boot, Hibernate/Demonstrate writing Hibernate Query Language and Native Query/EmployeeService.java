package com.example.ormlearn.service;

import java.util.List;

import com.example.ormlearn.entity.Employee;

public interface EmployeeService {

    List<Employee> getAllPermanentEmployees();

    List<Employee> getAllPermanentEmployeesFetch();

    Double getAverageSalary(int departmentId);

    List<Employee> getAllEmployeesNative();

}

