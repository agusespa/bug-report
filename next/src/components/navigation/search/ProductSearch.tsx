"use client";

import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEvent, useState } from "react";

export default function SearchBar() {
    const [term, setTerm] = useState("");

    const router = useRouter();

    // TODO: implement a modal that shows suggestions
    // const debouncedTerm = useDebounce<string>(term, 600);
    // useEffect(() => {
    //     if (debouncedTerm !== "") {
    //         const encodedTerm = encodeURIComponent(debouncedTerm);
    //         router.push(`/products/search?term=${encodedTerm}`);
    //     }
    // }, [debouncedTerm]);

    const handleSearchTermChange: ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setTerm(event.target.value);
    };

    const handleSearchFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (term !== "") {
            const encodedTerm = encodeURIComponent(term);
            router.push(`/products/search?term=${encodedTerm}`);
            setTerm("");
        }
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement !== null) activeElement.blur();
    };

    return (
        <form onSubmit={handleSearchFormSubmit}>
            <input
                type="search"
                placeholder="Search"
                value={term}
                onChange={handleSearchTermChange}
            />
        </form>
    );
}
