import Sidebar from "@/src/components/navigation/Sidebar";
import styles from "@/src/app/products/ProductsPage.module.scss";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.productsPageContainer}>
      <Sidebar />
      <div className={styles.productsWrapper}>{children}</div>
    </div>
  );
}
