import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json([
      { id: 1, name: "General Chat" },
      { id: 2, name: "Random" },
    ]);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
