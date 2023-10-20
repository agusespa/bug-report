export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
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
  category: string;
  price: number;
  currency: string;
}

export type ProductsResponse = { products: ProductResponse[] };

export function mapToProduct(res: ProductResponse): Product {
  return {
    id: res.id,
    title: res.title,
    description: res.description,
    category: res.category,
    price: { amount: res.price, currency: "USD" },
  };
}

export function mapToProducts(res: ProductResponse[]): Product[] {
  return res.map((p) => mapToProduct(p));
}
