export interface Product {
  id: number;
  name: string;
  price: Price;
}

interface Price {
  amount: string;
  currency: string;
}

export interface ProductResponse {
  id: number;
  name: string;
  price: string;
  currency: string;
}

export function mapToProduct(res: ProductResponse): Product {
  return {
    id: res.id,
    name: res.name,
    price: { amount: res.price, currency: res.currency },
  };
}

export function mapToProducts(res: ProductResponse[]): Product[] {
  return res.map((p) => mapToProduct(p));
}
