class UserAccount {
  readonly name: string;
  readonly age: number;
  protected isOnline: boolean;

  constructor(name: string, age: number, isOnline: boolean) {
    this.name = name;
    this.age = age;
    this.isOnline = false;
  }

  logDetails(): void {
    console.log(`the player ${this.name} has ${this.age} years old.`);
  }
}


class CharAccount extends UserAccount {
  private nickname: string;
  private level: number;

  constructor(name: string, age: number, isOnline: boolean, nickname: string, level: number) {
    super(name, age, isOnline);

    this.nickname = nickname;
    this.level = level;
    this.isOnline = true;
  }

  logDetails(): void {
    console.log(`the player ${this.name} is ${this.nickname} at level ${this.level}, and has ${this.age} yo. He is ${ this.isOnline ? 'online' : 'offline'}`);
  }

  get getLevel() {
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level;
  }

}


const iza = new UserAccount('bel', 21, false);
iza.logDetails();
// readonly allow access
console.log('age', iza.age);

const john = new CharAccount('john', 45, true, 'johndoe', 70, );
john.logDetails();

// cannot access john.level
// but we love getters and setters

console.log(john.getLevel);
john.setLevel = 45;



// public modifiers: everyone can access the property, its default
// remember abstract class

