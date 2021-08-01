// creating types, when the primitives doesn't help

type Uid = number | string | undefined;

function logDetails (uid: Uid, item: string) {
  console.log(`product ${uid} has title ${item}`)
}

// or if we need to type an entire object 


type AccountInfo = {
  id: number;
  name: string;
};

type CharInfo = {
  nickname: string;
  level: number;
};

// and like at a union for types, we can intersec the types

type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  nickname: 'johndoe',
  name: 'john',
  id: 3443,
  level: 3
}