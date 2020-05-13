class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}?`);
  }
}

const normalUser = new User("colas");
normalUser.sayHello();
