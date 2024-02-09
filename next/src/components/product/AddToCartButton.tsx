'use client';

import styles from '@/src/app/product/[id]/ProductPage.module.scss';
import { useRouter } from 'next/navigation';

async function addProductToCart(id: string): Promise<void> {
    try {
        const response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: id,
            }),
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

interface Props {
    id: string;
}

export default function addToCartButton(props: Props) {
    const router = useRouter();

    function handleAddClick(): void {
        addProductToCart(props.id);

        router.refresh();
    }

    return (
        <button className={styles.addToCartButton} onClick={handleAddClick}>
            Add to cart
        </button>
    );
}
