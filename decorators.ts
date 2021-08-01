// @Component
// @Selector
// @useState("ola")
// types: class, property, method, parameter, acessor

// target is the class constructor

function Logger(prefix: string) {
  return (target: any) => {
    console.log(`${prefix} - ${target}`, );
  }
}

@Logger("p")
class Foo {}


function setAPIVersion(apiVersion: string) {
  return (target: any) => {
    return class extends target {
      version = apiVersion;
    };
  };
}

@setAPIVersion("3.0.0.0")
class API {}

 console.log(new API());

// property decorator

function minLength(length: number) {
  return (target: any, key: string | symbol) => {
    let val = target[key]

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length < length) {
        console.log("error");
      } else {
        val = value;
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    });
  }
}

class Movie {
  // validation for title with less than 5 words
  @minLength(5)
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const newMovie = new Movie("Interstellar");
console.log(newMovie.title);


// method decorator
// run every time the method is called, the class run in runtime

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    // save the original method because after waiting we still using it

    const originalMethod = descriptor.value; 

    descriptor.value = function (...args: any) {
      console.log(`esperando ${ms} s ...`)
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms);

      return descriptor;
    }
  }

}


class Greeter {
  greeting: string;

  constructor (greeting: string) {
    this.greeting = greeting;
  }

  // the decorator wait for a time, then greets the person
  @delay(1000)
  greet() {
    console.log(`Hello, ${this.greeting}`);
  }
}

const person = new Greeter('person');
person.greet();

