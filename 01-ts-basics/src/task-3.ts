export const usernames: string[] = ["alice", "bob", "charlie"];
export const ratings: number[] = [4.5, 3.8, 5.0];

export interface Product {
  id: number;
  title: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Keyboard",
    price: 49.99,
  },
  {
    id: 2,
    title: "Mouse",
    price: 29.99,
  },
];
