class PersonClass {
  private name: string = '';

  birthYear: number = 0;

  constructor(name:string, birthYear: number) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getName() {
    return this.name;
  }
}
export {
  // eslint-disable-next-line import/prefer-default-export
  PersonClass,
};
