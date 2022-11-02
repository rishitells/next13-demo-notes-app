import styles from "./page.module.css";

import { Note, Notes } from "../db";

import SideBar from "./components/side-bar/SideBar";

export default async function Home({
  searchParams,
}: {
  searchParams: { q: string; id: string };
}) {
  const result = await fetch(
    `http://localhost:3000/api/notes${
      searchParams.q ? `?q=${searchParams.q}` : ""
    }`
  );

  const notes: Notes = await result.json();

  return (
    <main className={styles.container}>
      <SideBar notes={notes} />
    </main>
  );
}
