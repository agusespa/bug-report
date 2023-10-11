export interface Product {
  id: number;
  title: string;
  description: string;
  price: Price;
}

interface Price {
  amount: number;
  currency: string;
}

export interface ProductResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
}

export type ProductsResponse = { products: ProductResponse[] };

export function mapToProduct(res: ProductResponse): Product {
  return {
    id: res.id,
    title: res.title,
    description: res.description,
    price: { amount: res.price, currency: "USD" },
  };
}

export function mapToProducts(res: ProductResponse[]): Product[] {
  return res.map((p) => mapToProduct(p));
}
