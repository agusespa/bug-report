import { Product, ProductResponse, mapToProducts } from "@/src/models/Product";
import Products from "@/src/components/products/Products";

async function getProducts(category: string): Promise<ProductResponse[]> {
  const query = `category=${encodeURIComponent(category)}`;
  const res = await fetch("http://127.0.0.1:8080/productapi/products?" + query, {
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

export default async function ProductsByCategoryPage(props: Props) {
  const title = decodeURIComponent(props.params.category);
  let productList: Product[] = [];

  try {
    const products = await getProducts(props.params.category);
    productList = mapToProducts(products);
  } catch (err) {
    // TODO: handle error
    console.error(err);
  }

  return <Products title={title} productList={productList} />;
}
