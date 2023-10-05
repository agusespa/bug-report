import ProductList from "@/src/components/product/ProductList";
import { ProductResponse, mapToProducts } from "@/src/models/Product";

async function getProducts(): Promise<ProductResponse[]> {

  const res = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline",
    { next: { revalidate: 60 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const productData: ProductResponse[] = await getProducts();
  const productList = mapToProducts(productData);

  return <ProductList products={productList} />;
}
