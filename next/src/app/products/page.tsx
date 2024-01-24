import Products from "@/src/components/products/Products";
import { Product, ProductResponse, mapToProducts } from "@/src/models/Product";

async function getProducts(): Promise<ProductResponse[]> {
  const res = await fetch("http://127.0.0.1:8080/products", {
    next: { revalidate: 60000 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ProductsPage() {
  let productList: Product[] = [];

  try {
    const products = await getProducts();
    productList = mapToProducts(products);
  } catch (err) {
    // TODO: handle error
    console.error(err);
  }

  return <Products title="All products" productList={productList} />;
}
