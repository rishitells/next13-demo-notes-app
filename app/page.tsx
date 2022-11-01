// import Image from 'next/image'
import styles from "./page.module.css";

import { Note, Notes } from "../db";

import SearchBar from "./components/search-bar/SearchBar";
import NotesList from "./components/notes-list/NotesList";
import NotePreview from "./components/note-preview/NotePreview";

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

  const noteResult = await fetch(
    `http://localhost:3000/api/note/${searchParams.id}`
  );
  const note: Note = await noteResult.json();

  return (
    <main className={styles.container}>
      <div className={styles.sideBar}>
        <SearchBar />
        <NotesList notes={notes} />
      </div>
      <div className={styles.notePreview}>
        <NotePreview note={note} />
      </div>
    </main>
  );
}
