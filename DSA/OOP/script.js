// Base Employee class
class Employee {
    constructor(salary, experience, department) {
        this.salary = salary;
        this.experience = experience;
        this.department = department;
    }

    getDetails() {
        return `${this.department} employee with ${this.experience} years of experience, earning $${this.salary}`;
    }
}

// Derived Manager class, which inherits from Employee
class Manager extends Employee {
    constructor(salary, experience, department, teamSize) {
        super(salary, experience, department); // Call the parent class constructor
        this.teamSize = teamSize;
    }

    manageTeam() {
        return `Managing a team of ${this.teamSize} employees.`;
    }

    getDetails() {
        // Add additional information for managers
        return `${super.getDetails()} and managing ${this.teamSize} people.`;
    }
}

// Creating instances (employees joining the company)

// Regular employee
const employee1 = new Employee(50000, 5, 'HR');
console.log(employee1.getDetails());  // Output: HR employee with 5 years of experience, earning $50000

// Manager
const manager1 = new Manager(90000, 10, 'Engineering', 8);
console.log(manager1.getDetails());  // Output: Engineering employee with 10 years of experience, earning $90000 and managing 8 people.
console.log(manager1.manageTeam());  // Output: Managing a team of 8 employees.

// Another Regular Employee
const employee2 = new Employee(55000, 3, 'Marketing');
console.log(employee2.getDetails());  // Output: Marketing employee with 3 years of experience, earning $55000

// Another Manager
const manager2 = new Manager(95000, 12, 'Sales', 10);
console.log(manager2.getDetails());  // Output: Sales employee with 12 years of experience, earning $95000 and managing 10 people.
