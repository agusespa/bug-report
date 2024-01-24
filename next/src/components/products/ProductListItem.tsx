import { Product } from "@/src/models/Product";
import Link from "next/link";
import styles from "./Products.module.scss";

interface Props {
    product: Product;
}

export default function ProductListItem({ product }: Props) {
    return (
        <>
            <Link
                href={`/product/${product.id}`}
                className={styles.productListItemContainer}
            >
                <div className={`${styles.detailsContainer} ${styles.left}`}>
                    <p className={styles.title}>{product.name}</p>
                    <p>{product.subtitle}</p>
                </div>
                <div className={`${styles.detailsContainer} ${styles.right}`}>
                    <p>{`${product.price.amount} ${product.price.currency}`}</p>
                    <p>{product.brand}</p>
                </div>
            </Link>
        </>
    );
}
