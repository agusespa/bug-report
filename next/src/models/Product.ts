export interface Product {
  id: number;
  name: string;
  brand: string;
  subtitle: string;
  category: string;
  price: Price;
  details?: ProductDetails;
}

interface Price {
  amount: number;
  currency: string;
}

interface ProductDetails {
  stock: number;
  description: string;
  sku: string;
}

export interface ProductResponse {
  ID: number;
  Name: string;
  Brand: string;
  Subtitle: string;
  Category: string;
  Price: PriceResponse;
  Details?: ProductDetailsResponse;
}

interface PriceResponse {
  Amount: number;
  Currency: string;
}

interface ProductDetailsResponse {
  Stock: number;
  Description: string;
  Sku: string;
}

export function mapToProduct(res: ProductResponse): Product {
  if (!res) return {} as Product;

  const price: Price = {
    amount: res.Price?.Amount,
    currency: res.Price?.Currency,
  };

  const details: ProductDetails | undefined = res.Details
    ? {
        stock: res.Details?.Stock,
        description: res.Details?.Description,
        sku: res.Details?.Sku,
      }
    : undefined;

  return {
    id: res.ID,
    name: res.Name,
    brand: res.Brand,
    subtitle: res.Subtitle,
    category: res.Category,
    price,
    details,
  };
}

export function mapToProducts(res: ProductResponse[]): Product[] {
  if (!res) return [];
  return res.map((p) => mapToProduct(p));
}
