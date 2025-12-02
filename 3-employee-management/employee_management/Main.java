package employee_management;

import java.util.Arrays;
import java.util.List;

public class Main {
  public static void main(String[] args) {

    List<Employee> employees = Arrays.asList(
        new Employee(101, "Khushi", 95000.0),
        new Employee(102, "Rehan", 73000.0),
        new Employee(103, "Adarsh", 75000.0),
        new Employee(104, "Dev", 65000.0),
        new Employee(105, "Unaiz", 94000.0));

    employees.forEach(e -> {
      e.displayDetails();
      System.out.println("---------------");
    });
  }

}
