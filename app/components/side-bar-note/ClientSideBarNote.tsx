"use client";
import React, { useState } from "react";
import {useRouter} from "next/navigation";

const ClientSideBarNote: React.FC<{
  noteId: string;
  children: React.ReactNode;
  expandedChildren: React.ReactNode;
}> = ({ noteId, children, expandedChildren }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    router.push(`?id=${noteId}`);
    router.refresh();
  };

  return (
    <div onClick={toggleExpand}>
      {children}
      {isExpanded && expandedChildren}
    </div>
  );
};

export default ClientSideBarNote;
