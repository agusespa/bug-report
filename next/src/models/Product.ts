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
    id: number;
    name: string;
    brand: string;
    subtitle: string;
    category: string;
    price: PriceResponse;
    details?: ProductDetailsResponse;
}

interface PriceResponse {
    amount: number;
    currency: string;
}

interface ProductDetailsResponse {
    stock: number;
    description: string;
    sku: string;
}

export function mapToProduct(res: ProductResponse): Product {
    if (!res) return {} as Product;

    const price: Price = {
        amount: res.price?.amount,
        currency: res.price?.currency,
    };

    const details: ProductDetails | undefined = res.details
        ? {
              stock: res.details?.stock,
              description: res.details?.description,
              sku: res.details?.sku,
          }
        : undefined;

    return {
        id: res.id,
        name: res.name,
        brand: res.brand,
        subtitle: res.subtitle,
        category: res.category,
        price,
        details,
    };
}

export function mapToProducts(res: ProductResponse[]): Product[] {
    if (!res) return [];
    return res.map(p => mapToProduct(p));
}
