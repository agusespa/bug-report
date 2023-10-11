import ProductList from "@/src/components/products/ProductList";
import { ProductsResponse, mapToProducts } from "@/src/models/Product";

async function getProducts(): Promise<ProductsResponse> {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60000 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Products() {
  const productsResponse = await getProducts();
  const productList = mapToProducts(productsResponse.products);

  return (
    <>
      <h1>All products</h1>
      <ProductList products={productList} />
    </>
  );
}
