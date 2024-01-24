import { Product } from "@/src/models/Product";
import { ReactElement } from "react";
import styles from "./Products.module.scss";
import ProductList from "./ProductList";

interface Props {
    title: string;
    productList: Product[];
}

const Products = (props: Props): ReactElement => {

    return (
        <div className={styles.productsContainer}>
            <h1>{props.title}</h1>
            <ProductList products={props.productList} />
        </div>
    );
};

export default Products;
