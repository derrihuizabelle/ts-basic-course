// to describe an object only
// we can use the ? signal to non mandatory properties, and readonly like in class


interface Game {
  readonly title: string;
  readonly description: string;
  readonly version: string;
  readonly platform: string[];
  getSimilars?: (title: string) => void;
}

const mario: Game = {
  title: 'super mario world',
  description: 'everyone knows mario',
  version: '3.3.a',
  platform: ['Super Nintendo', 'Nintendo 64', 'Nintendo DS'],
  getSimilars: (title: string) => {
    console.log(`${title} is similar to Kirby Avdentures`);
  }
}


// it is nice to verify if the non mandatory propertie exists

if (mario.getSimilars) {
  mario.getSimilars(mario.title);
}

// we can extend interfaces too

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const yoshi: DLC = {
  // the game info
  title: 'super mario world',
  description: 'everyone knows mario',
  version: '3.3.a',
  platform: ['Super Nintendo', 'Nintendo 64', 'Nintendo DS'],
  
  // our info
  originalGame: mario,
  newContent: ['you are yoshi', 'you will save peach']

}

// class based on a interface

class CreateGame implements Game {
  title: string;
  description: string;
  version: string;
  platform: string[];
 
  constructor(t: string, d:string, v:string, p:string[]) {
    this.title = t;
    this.description = d;
    this.version = v;
    this.platform = p;
  }
}