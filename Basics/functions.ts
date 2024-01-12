type Functype = (n: number, m: number, l?: number) => number;

const func: Functype = (n, m, l) => {
  if (typeof l === "undefined") {
    return n * m;
  }

  return n * m * l;
};

console.log(func(25, 23));
//default parameter
type Functype1 = (n: number, m: number, l?: number) => number;

const func1: Functype1 = (n, m, l = 20) => {
  return n * m * l;
};

func1(25, 23);

//rest operator

type Functype2 = (...m: number[]) => number[];

const func2: Functype2 = (...m) => {
  return m;
};

func2(25, 23);

console.log(func2(25, 23));

///with normal function

function lol(n: number): number {
  return 45;
}
