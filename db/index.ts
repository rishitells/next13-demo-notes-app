import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { Low } from "lowdb";
// @ts-ignore
import { JSONFile } from "lowdb/node";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");

export type Note = { id: string; title: string; text: string; updatedAt: string; };
export type Notes = Note[];

const database = async () => {
  const adapter = new JSONFile<Notes>(file);
  const db = new Low(adapter);
  await db.read();

  return db;
};

export default database;
