export function printUserInfo(name: string, age: number, email?: string): void {
  if (email) {
    console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
  } else {
    console.log(`Name: ${name}, Age: ${age}`);
  }
}

printUserInfo("Alice", 28);
printUserInfo("Bob", 32, "bob@example.com");
