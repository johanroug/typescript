class Person {
  name: string;
  private type: string;
  protected age: number;

  constructor(name: string, public userName: string) {
    this.name = name;
  }
}

const person = new Person("Johan", "johan");
console.log(person);
console.log(person.name);
