import type { NextApiRequest, NextApiResponse } from "next";

interface Quote {
  q: string;
  a: string;
}

interface CatFact {
  fact: string;
  length: number;
}

interface AdviceSlip {
  id: number;
  advice: string;
}

export interface ApiResponse {
  zenQuotes: Quote[];
  catData: {
    data: CatFact[];
  };
  adviceData: {
    slips: AdviceSlip[];
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const zenResponse = await fetch("https://zenquotes.io/api/quotes/");
    const zenQuotes = await zenResponse.json();

    const catResponse = await fetch("https://catfact.ninja/facts?limit=5");
    const catData = await catResponse.json();

    const adviceResponse = await fetch(
      "https://api.adviceslip.com/advice/search/life"
    );
    const adviceData = await adviceResponse.json();

    res.status(200).json({
      zenQuotes,
      catData,
      adviceData,
    });
  } catch (error) {
    console.error("Error fetching quotes:", error);
    res.status(500).json({ error: "Failed to fetch quotes" });
  }
}
