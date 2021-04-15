import quotes from "quotesy";

export default function qouteAPI(req, res) {
  const quote = quotes.random();
  res.status(200).json(quote);
}
