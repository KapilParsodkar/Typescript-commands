interface Product {
  name: string;
  stock: number;
  price: number;
  photo?: string;
  readonly id: string;
}

type GetDataType = (product: Product) => void;

const getData: GetDataType = (product) => {
  console.log(product);
};

const productOne = {
  name: "Macbook",
  stock: 45,
  price: 100,
  photo: "yo",
  id: "3435656",
};

getData(productOne);

//Never type

type themeMide = "light" | "dark";

const mode: themeMide = "light";

const errorHandler = (): never => {
  throw new Error();
};
