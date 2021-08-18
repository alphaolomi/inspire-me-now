import { NextApiRequest, NextApiResponse } from "next";
import quotes from "quotesy";

export default function qouteAPI(
    req: NextApiRequest,
    res: NextApiResponse,
): void {
    const quote = quotes.random();
    res.status(200).json(quote);
}
