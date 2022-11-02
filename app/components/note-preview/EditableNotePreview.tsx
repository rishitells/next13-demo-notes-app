"use client";
import React from "react";
import Link from "next/link";

import styles from "./EditableNotePreview.module.css";
import { Note } from "../../../db";

const EditableNotePreview: React.FC<{
  children: React.ReactNode;
  note: Note;
}> = ({ note, children }) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <Link href="/"><button>Back</button></Link>
      <button onClick={toggleEdit}>Edit</button>
      {isEditing ? (
        <>
          <input
            className={styles.editTitleInput}
            type="text"
            value={note.title}
          />
          <textarea className={styles.editTextInput} value={note.text} />
        </>
      ) : (
        children
      )}
    </>
  );
};

export default EditableNotePreview;
