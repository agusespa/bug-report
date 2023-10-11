import {
  ProductResponse,
  mapToProduct,
} from "@/src/models/Product";

async function getProduct(id: string): Promise<ProductResponse> {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60000 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

interface Props {
  params: { id: string };
}

export default async function ProductsByCategory(props: Props) {
  const productsResponse = await getProduct(props.params.id);
  const product = mapToProduct(productsResponse);

  return (
    <>
      <h1>{product.title}</h1>
      <ul>
        <li>{product.description}</li>
        <li>{`${product.price.amount} ${product.price.currency}`}</li>
      </ul>
    </>
  );
}
