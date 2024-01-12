type obj = {
  height: number;
  weight: number;
  gender?: boolean;
};

const Obj: obj = {
  gender: true,
  height: 56,
  weight: 23,
};

const Obj2: obj = {
  gender: false,
  height: 46,
  weight: 33,
};

const Obj3: obj = {
  height: 46,
  weight: 33,
};

interface ob {
  height: number;
  weight: number;
  gender?: boolean;
}

type func = (n: number, m: number) => void;

interface newob extends ob {
  scolar: boolean;
  func: func;
}

const gigi: newob = {
  height: 34,
  weight: 56,
  scolar: true,
  func: (n, m) => {
    console.log(n * m);
  },
};

const buffon: newob = {
  height: 12,
  weight: 20,
  scolar: true,
  func: (n, m) => {
    console.log(n * m);
  },
};

buffon.func(20, 30);
