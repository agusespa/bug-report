"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SideBar.module.scss";

interface Props {
    category: string;
}

export default function SidebarItem(props: Props) {
    const pathname = usePathname();
    const href = `/products/${props.category}`;

    return (
        <Link
            href={href}
            className={`${styles.sidebarLink} ${
                pathname === href ? styles.active : ""
            }`}
        >
            {props.category}
        </Link>
    );
}
