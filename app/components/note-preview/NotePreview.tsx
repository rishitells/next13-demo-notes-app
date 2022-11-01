import {Note} from "../../../db";

import styles from "./NotePreview.module.css";

const NotePreview = ({ note }: { note: Note }) => {
  return (
    <div className={styles.notePreview}>
      <h2>{note.title}</h2>
      <p>{note.text}</p>
    </div>
  );
};

export default NotePreview;