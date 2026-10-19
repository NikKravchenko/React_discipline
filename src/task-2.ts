export interface Product {
  readonly id: number;
  title: string;
  price: number;
  description?: string;
}

export const product: Product = {
  id: 1,
  title: "Laptop",
  price: 999.99,
  description: "High-performance laptop",
};
