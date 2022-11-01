"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    router.push(`?q=${event.target.value}`);
    router.refresh();
  };

  return (
    <input className={styles.searchInput} placeholder="Search notes..." type="text" value={value} onChange={handleChange} />
  );
};

export default SearchBar;
