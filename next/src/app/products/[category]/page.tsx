import ProductList from "@/src/components/products/ProductList";
import { ProductsResponse, mapToProducts } from "@/src/models/Product";

async function getProducts(category: string): Promise<ProductsResponse> {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`, {
    next: { revalidate: 60000 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

interface Props {
  params: { category: string };
}

export default async function ProductsByCategory(props: Props) {
  const productsResponse = await getProducts(props.params.category);
  const productList = mapToProducts(productsResponse.products);

  return (
    <>
      <h1>{props.params.category}</h1>
      <ProductList products={productList} />
    </>
  );
}
