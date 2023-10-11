import styles from "@/src/shared/styles/Loading.module.scss";

export default function ProductLoading() {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinnerBig}></div>
    </div>
  );
}
