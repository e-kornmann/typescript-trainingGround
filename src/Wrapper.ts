class Wrapper<T> {
  private list: T[];

  constructor(list : T[]) {
    this.list = list;
  }

  public getFirst() : T { return this.list[0]; }

  public getLast() : T { return this.list[this.list.length - 1]; }

  public getList() : T { return this.list[this.list.length - 2]; }
}

export {
  // eslint-disable-next-line import/prefer-default-export
  Wrapper,
};
