import { Product, ProductResponse, mapToProducts } from "@/src/models/Product";
import Products from "@/src/components/products/Products";

async function getProducts(
  query: string | string[] | undefined
): Promise<ProductResponse[]> {
  if (typeof query === "string") {
    const res = await fetch(
      "http://127.0.0.1:8080/productapi/products/search?term=" + query,
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

export default async function ProductsSearchPage(props: Props) {
  const title =
    typeof props.searchParams.term === "string"
      ? decodeURIComponent(props.searchParams.term)
      : "Search";

  let productList: Product[] = [];

  try {
    const products = await getProducts(props.searchParams.term);
    productList = mapToProducts(products);
  } catch (err) {
    // TODO: handle error
    console.error(err);
  }

  return <Products title={title} productList={productList} />;
}
