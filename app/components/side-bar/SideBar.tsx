import styles from "./SideBar.module.css";

import { Notes } from "../../../db";

import SearchBar from "../search-bar/SearchBar";
import NotesList from "../notes-list/NotesList";

export default function SideBar({ notes }: { notes: Notes }) {
  return (
    <div className={styles.sideBar}>
      <SearchBar />
      <NotesList notes={notes} />
    </div>
  );
}
