const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier == null) {
    return value * 2;
  } else {
    return value * multiplier;
  }
};

type ValueType = number | string | boolean;
const processInput = (value: ValueType): number | string => {
  if (typeof value == "string") {
    return value.trim().toLowerCase();
  } else if (typeof value == "number") {
    return value * 10;
  } else {
    if (value == true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};

const formatCoordinate = (
  location: readonly [
    latitude: number,
    longitude: number,
    locationName: string,
  ],
): string => {
  const [latitude, longitude, locationName] = location;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (course: Course[], minStudents: number): Course[] => {
  const filterCourses: Course[] = [];
  for (const i of course) {
    if (i.isPublished == true && i.students >= minStudents) {
      filterCourses.push(i);
    }
  }
  return filterCourses;
};
const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  const data = "Access Granted";

  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return data;
};
