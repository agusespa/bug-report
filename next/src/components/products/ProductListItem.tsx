import { Product } from "@/src/models/Product";
import Link from "next/link";
import styles from "./Products.module.scss";

interface Props {
    product: Product;
}

export default function ProductListItem({ product }: Props) {
    return (
        <div className={styles.productListItemContainer}>
            <Link href={`/product/${product.id}`}>{product.title}</Link>
            <p>{`${product.price.amount} ${product.price.currency}`}</p>
        </div>
    );
}
