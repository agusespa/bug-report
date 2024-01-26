import CategoryList from './CategoryList';

async function getCategories(): Promise<string[]> {
    const res = await fetch('http://127.0.0.1:8080/productapi/products/categories', {
        next: { revalidate: 6000000 },
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Categories() {
    let categoryList: string[] = [];
    try {
        categoryList = await getCategories();
    } catch (err) {
        // TODO: handle error
        console.error(err);
    }

    return <CategoryList categoryList={categoryList} />;
}
