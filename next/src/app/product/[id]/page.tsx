import { Product, ProductResponse, mapToProduct } from "@/src/models/Product";
import styles from "@/src/app/product/[id]/ProductPage.module.scss";
import AddToCartButton from "@/src/components/product/AddToCartButton";

async function getProduct(id: string): Promise<ProductResponse> {
  const res = await fetch(`http://127.0.0.1:8080/products/${id}`, {
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

export default async function ProductPage(props: Props) {
  let product: Product | undefined;
  try {
    const productsResponse = await getProduct(props.params.id);
    product = mapToProduct(productsResponse);
  } catch (err) {
    // TODO: handle error
    console.error(err);
  }

  if (!product) return null;
  return (
    <div className={styles.productMainContainer}>
      <h1>{product.name}</h1>
      <ul>
        <li>{product.subtitle}</li>
        <li>{product.details?.description}</li>
        <li>{`${product.price.amount} ${product.price.currency}`}</li>
      </ul>
      <AddToCartButton id={props.params.id} />
    </div>
  );
}
