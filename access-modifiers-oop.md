# Access Modifiers in TypeScript OOP

## Introduction

In TypeScript OOP, access modifiers are used to control the access of properties and methods inside a class. It means who can access the data and who cannot access it. There are four types of access modifiers in TypeScript: `public`, `private`, `protected`, and `readonly`. Let's understand them with some examples.

## Detailed Explanation

### 1. Public

Public is the default access modifier in TypeScript. If we don't write any access modifier, TypeScript automatically treats it as public. We can access public properties from inside the class, outside the class, and also from child classes.

```typescript
class Employee {
  constructor(public name: string) {}
}

const employee = new Employee("Tusher");
console.log(employee.name); // Tusher
```

Here, we can access the name directly using the employee object.

### 2. Private

Private means we can only access a property inside its own class. We cannot access it from outside the class or from child classes.

```typescript
class Employee {
  constructor(private _baseSalary: number) {}

  getSalary() {
    return this._baseSalary;
  }
}
```

Here, we cannot access `_baseSalary` directly outside the class. We need to use a method to get the value.

### 3. Protected

Protected is almost similar to private. But there is one difference. We can access protected properties inside its own class and also from child classes.

In our example, Manager extends Employee. So Manager can access `_baseSalary` directly if it is protected.

```typescript
class Manager extends Employee {
  getManagerSalary() {
    return this._baseSalary + 500;
  }
}
```

But we cannot access `_baseSalary` directly using an object outside the class.

### 4. Readonly

Readonly means we can only assign a value once. After assigning the value, we cannot change it.

```typescript
class Employee {
  constructor(public readonly name: string) {}
}

const employee = new Employee("Tusher");

// employee.name = "Rahim"; // Error
```

Here, we can read the name but cannot change it after creating the object.

## Conclusion

So, access modifiers help us to control our class properties and methods. Public can access from anywhere, private can access only inside its own class, protected can access inside its own class and child classes, and readonly means we cannot change the value after initialization. By using these access modifiers, we can make our code more organized and control our data properly.