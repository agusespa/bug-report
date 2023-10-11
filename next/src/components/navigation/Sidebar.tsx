import SidebarItem from "./SidebarItem";
import styles from "./SideBar.module.scss";

async function getCategories(): Promise<string[]> {
    const res = await fetch("https://dummyjson.com/products/categories", {
        next: { revalidate: 6000000 },
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function Sidebar() {
    const categoryList = await getCategories();

    const mappedCategories = categoryList.map((c) => (
        <li key={categoryList.indexOf(c)}>
            <SidebarItem category={c} />
        </li>
    ));

    return <ul className={styles.list}>{mappedCategories}</ul>;
}
