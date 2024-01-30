import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Categories.module.scss";

interface Props {
    category: string;
    handleToggleClick: () => void;
}

export default function CategoryItem(props: Props) {
    const pathname = usePathname();
    const href = `/products/${props.category}`;

    return (
        <Link
            href={href}
            className={`${styles.categoryLink} ${
                pathname === href ? styles.active : ""
            }`}
            onClick={props.handleToggleClick}
        >
            {props.category}
        </Link>
    );
}
