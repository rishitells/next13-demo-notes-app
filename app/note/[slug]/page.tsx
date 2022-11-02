import { Note } from "../../../db";
import styles from "../../page.module.css";
import NotePreview from "../../components/note-preview/NotePreview";

export default async function Page({ params }: { params: { slug: string } }) {
  const noteResult = await fetch(
    `http://localhost:3000/api/note/${params.slug}`
  );
  const note: Note = await noteResult.json();

  return (
    <div className={styles.notePreview}>
      <NotePreview note={note} />
    </div>
  );
}
