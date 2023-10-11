"use client";

import useDebounce from "@/src/utils/useDebounce";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";

export default function SearchBar() {
    const [term, setTerm] = useState("");

    const debouncedTerm = useDebounce<string>(term, 600);
    const router = useRouter();

    useEffect(() => {
        if (debouncedTerm !== "")
            router.push(`/products/search?title=${debouncedTerm}`);
    }, [debouncedTerm]);

    const handleSearchTermChange: ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        event.preventDefault();
        setTerm(event.target.value);
    };

    return (
        <input
            type="search"
            placeholder="Search"
            name="searchTerm"
            value={term}
            onChange={handleSearchTermChange}
        />
    );
}
