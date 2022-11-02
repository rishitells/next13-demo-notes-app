import { Note } from "../../../db";

import styles from "./NotePreview.module.css";
import EditableNotePreview from "./EditableNotePreview";

const NotePreview = ({ note }: { note: Note }) => {
  return (
    <EditableNotePreview note={note}>
      <div className={styles.notePreview}>
        <h2>{note.title}</h2>
        <p>{note.text}</p>
      </div>
    </EditableNotePreview>
  );
};

export default NotePreview;
