interface iauthor {
    id: number;
    username: string;
  }
  interface icategory {
    id: number;
    title: string;
  }
  interface Ipost {
    id: number;
    title: string;
    desc: string;
    extra: iauthor[] | icategory[];
  }
  
  interface IpostBetter<T> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
  }
  
  const testMe: IpostBetter<string> = {
    id: 1,
    title: "post",
    desc: "post desc",
    extra: ["yo", "yo2"],
  };
  
  interface IpostEvenBetter<T extends object> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
  }
  
  // const testMe2: IpostEvenBetter<{ id: number; username: string }> = {
  //   id: 1,
  //   title: "post",
  //   desc: "post desc",
  //   extra: [{ id: 2, username: "yo" }],
  // };
  
  const testMe2: IpostEvenBetter<iauthor> = {
    id: 1,
    title: "post",
    desc: "post desc",
    extra: [{ id: 2, username: "yo" }],
  };
  