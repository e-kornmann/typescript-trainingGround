function greet(name: string, birthYear: number) : string {
    const age = new Date().getFullYear() - birthYear;
    return `Hello ${name}, you are ${age} years old`;
  }
  console.log(greet('My name', 1999));
  export {
    greet
  }