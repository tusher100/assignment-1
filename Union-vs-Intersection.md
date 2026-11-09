# Combining Union and Intersection Types in TypeScript

## Introduction

In TypeScript, Union (`|`) and Intersection (`&`) types help us to create flexible and reusable types. Union means we can use one type from multiple options, and Intersection means combining multiple types together.

## Detailed Explanation with Example

Let's take an example of an employee management system.

```typescript
type Role = "admin" | "manager" | "employee";

type User = {
  name: string;
  id: number;
  role: Role;
};

type Employee = User & {
  salary: number;
  department: string;
};

const employee: Employee = {
  name: "Tusher",
  id: 123,
  role: "manager",
  salary: 5000,
  department: "IT"
};
```

Here, `Role` is a Union type because it can accept any one of three values: admin, manager, or employee.

On the other hand, `Employee` is an Intersection type because it combines all properties of `User` with its own properties like salary and department. So we don't need to write the same properties again.

## Conclusion

Union and Intersection types are very useful in TypeScript. Union gives us multiple options to choose from, while Intersection combines multiple types into one. By using both together, we can make our code more reusable and easy to maintain.