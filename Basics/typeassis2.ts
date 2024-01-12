type UserName2 = (n: number, m: number) => number;

const func1: UserName2 = (n, m) => {
  console.log(n, m);
  return n * m;
};
