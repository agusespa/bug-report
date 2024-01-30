'use client';

import CategoryItem from './CategoryItem';
import styles from './Categories.module.scss';
import { useState } from 'react';

interface Props {
    categoryList: string[];
}

export default function CategoryList({ categoryList }: Props) {
    const [isListShown, setIsListShown] = useState(false);

    const mappedCategories = categoryList.map(c => (
        <li key={categoryList.indexOf(c)} className={styles.categoryItem}>
            <CategoryItem category={c} handleToggleClick={handleToggleClick} />
        </li>
    ));

    function handleToggleClick(): void {
        setIsListShown(prev => !prev);
    }

    return (
        <>
            <button className={styles.toggleButton} onClick={handleToggleClick}>
                Categories
            </button>

            {isListShown ? (
                <>
                    <div
                        className={styles.backdrop}
                        onClick={() => setIsListShown(false)}
                    />
                    <div className={styles.categoriesWrapper}>
                        <div className={styles.categoriesContainer}>
                            <ul className={styles.list}>{mappedCategories}</ul>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}
