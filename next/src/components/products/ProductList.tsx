import { Product } from "@/src/models/Product";
import { ReactElement } from "react";
import styles from "./Products.module.scss";
import ProductListItem from "./ProductListItem";

interface Props {
    products: Product[];
}

const ProductList = (props: Props): ReactElement => {
    const mappedProducts = props.products?.map((p) => (
        <ProductListItem product={p} key={p.id} />
    ));

    return <div className={styles.productListContainer}>{mappedProducts}</div>;
};

export default ProductList;
