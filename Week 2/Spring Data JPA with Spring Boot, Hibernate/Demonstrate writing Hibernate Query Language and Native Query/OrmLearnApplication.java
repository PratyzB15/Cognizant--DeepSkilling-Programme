package com.example.ormlearn;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.ormlearn.entity.Employee;
import com.example.ormlearn.service.EmployeeService;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        System.out.println("\n========== HQL ==========");
        List<Employee> employees = employeeService.getAllPermanentEmployees();

        for (Employee e : employees) {
            System.out.println(e);
        }

        System.out.println("\n========== HQL FETCH ==========");

        List<Employee> fetchEmployees = employeeService.getAllPermanentEmployeesFetch();

        for (Employee e : fetchEmployees) {
            System.out.println(e);
            System.out.println("Skills : " + e.getSkillList());
        }

        System.out.println("\n========== AVERAGE SALARY ==========");

        Double avg = employeeService.getAverageSalary(1);

        System.out.println("Average Salary of Department 1 = " + avg);

        System.out.println("\n========== NATIVE QUERY ==========");

        List<Employee> nativeEmployees = employeeService.getAllEmployeesNative();

        for (Employee e : nativeEmployees) {
            System.out.println(e);
        }

    }
}

