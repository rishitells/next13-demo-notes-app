// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import database, { Notes } from "../../../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Notes>
) {
  const db = await database();

  const {
    query: { id },
  } = req;

  // @ts-ignore
  const note = db.data.notes.find((note) => note.id == id);

  res.status(200).json(note ?? {});
}
