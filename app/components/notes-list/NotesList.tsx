import { Notes } from "../../../db";

import styles from "./NotesList.module.css";
import SideBarNote from "../side-bar-note/SideBarNote";

const NotesList = ({ notes }: { notes: Notes }) => {
  return (
    <ul className={styles.notesList}>
      {notes.map((note) => (
        <li className={styles.notesListItem} key={note.id}>
          <SideBarNote note={note} />
          {/*<h2>{note.title}</h2>*/}
          {/*<p>{note.text}</p>*/}
        </li>
      ))}
    </ul>
  );
};

export default NotesList;
