import type { NextApiRequest, NextApiResponse } from "next";

export interface ApiResponse {
  catData: {
    fact: string;
    length: number;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const catResponse = await fetch("https://catfact.ninja/fact");
    const catData = await catResponse.json();

    res.status(200).json({
      catData,
    });
  } catch (error) {
    console.error("Error fetching quotes:", error);
    res.status(500).json({ error: "Failed to fetch quotes" });
  }
}
