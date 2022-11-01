import { format, isToday } from "date-fns";

import { Note } from "../../../db";

import styles from "./SideBarNote.module.css";
import ClientSideBarNote from "./ClientSideBarNote";

const SideBarNote = ({ note }: { note: Note }) => {
  const updatedAt = new Date(note.updatedAt);
  const lastUpdatedAt = isToday(updatedAt)
    ? format(updatedAt, "h:mm bb")
    : format(updatedAt, "dd/MM/yyyy");

  return (
    <ClientSideBarNote noteId={note.id} expandedChildren={<p>{note.text}</p>}>
      <div className={styles.sideBarNoteListItem}>
        <header>
          <strong>{note.title}</strong>
          <small>{lastUpdatedAt}</small>
        </header>
      </div>
    </ClientSideBarNote>
  );
};

export default SideBarNote;
