import ProductList from "@/src/components/products/ProductList";
import { ProductsResponse, mapToProducts } from "@/src/models/Product";

async function getProducts(
  query: string | string[] | undefined
): Promise<ProductsResponse> {
  if (typeof query === "string") {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${query}`,
      {
        next: { revalidate: 60000 },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } else {
    throw new Error("Failed to fetch data");
  }
}

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ProductsBySearch(props: Props) {
  const productsResponse = await getProducts(props.searchParams.title);
  const productList = mapToProducts(productsResponse.products);

  return (
    <>
      <h1>"{props.searchParams.title}"</h1>
      <ProductList products={productList} />
    </>
  );
}
