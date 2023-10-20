import CategoryList from "./CategoryList";

async function getCategories(): Promise<string[]> {
    const res = await fetch("https://dummyjson.com/products/categories", {
        next: { revalidate: 6000000 },
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function Categories() {
    const categoryList = await getCategories();

    return <CategoryList categoryList={categoryList} />;
}
