"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ClientSideBarNote: React.FC<{
  noteId: string;
  children: React.ReactNode;
}> = ({ noteId, children }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/note/${noteId}`);
    router.refresh();
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default ClientSideBarNote;
