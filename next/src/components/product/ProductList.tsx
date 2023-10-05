import { Product } from "@/src/models/Product";
import { ReactElement } from "react";

const ProductList = ({ products }: { products: Product[] }): ReactElement => {
    const mappedProducts = products.map((p) => <div key={p.id}>{p.name}</div>);

    return <div>{mappedProducts}</div>;
};

export default ProductList;
