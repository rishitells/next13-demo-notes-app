// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import database, { Notes } from "../../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Notes>
) {
  const db = await database();

  const { method, body, query } = req;

  if (method === "GET") {
    if (!query.q) {
      // @ts-ignore
      res.status(200).json(db.data.notes);
    };

    // @ts-ignore
    const notes = db.data.notes.filter((note) => note.text.toLowerCase().includes(query.q)) ?? [];

    res.status(200).json(notes);
  }
}
