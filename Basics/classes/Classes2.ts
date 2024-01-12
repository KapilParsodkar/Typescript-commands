class Player {
  public readonly id: string;
  constructor(
    private height: number,
    public weight: number,
    protected power: number
  ) {
    this.id = String(Math.random() * 100);
  }
  myHeight = () => {
    return this.height;
  };
  get getmyweight(): number {
    return this.weight;
  }
  set changeweight(value: number) {
    this.weight = value;
  }
}

const abhi = new Player(100, 150, 23);
console.log(abhi.myHeight());
console.log(abhi.weight);

console.log("now player 2 extends player");

class Player2 extends Player {
  special: boolean;
  constructor(height: number, weight: number, power: number, special: boolean) {
    super(height, weight, power);
    this.special = special;
  }
  getMyPower = () => {
    return this.power;
  };
}

const kapi = new Player2(70, 80, 23, true);
console.log("weight", kapi.weight);
console.log("weight", kapi.getmyweight);
kapi.changeweight = 100;
console.log("weight", kapi.getmyweight);
console.log("Power", kapi.getMyPower());
console.log("Height", kapi.myHeight());
console.log("ID", kapi.id);
console.log("Boolean", kapi.special);

//interface classe

interface ProductType {
  name: string;
  price: number;
  stock: number;
  offer?: boolean;
}

interface GiveId {
  getId: () => string;
}
class Pro implements ProductType, GiveId {
  private iid: string = String(Math.random() * 1000);
  constructor(
    public name: string,
    public price: number,
    public stock: number
  ) {}
  getId = () => this.iid;
}

const kaps = new Pro("macbook", 2000, 20);
kaps.getId;
