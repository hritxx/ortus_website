import { KiteConnect } from "kiteconnect";

const api_key = process.env.KITE_API_KEY;
const access_token = process.env.KITE_ACCESS_TOKEN;

const SYMBOLS = [
  { tradingsymbol: "HDFCBANK", exchange: "NSE", name: "HDFC Bank Ltd" },
  { tradingsymbol: "SBIN", exchange: "NSE", name: "State Bank of India" },
  { tradingsymbol: "ICICIBANK", exchange: "NSE", name: "ICICI Bank Ltd" },
  { tradingsymbol: "AXISBANK", exchange: "NSE", name: "Axis Bank Ltd" },
  {
    tradingsymbol: "KOTAKBANK",
    exchange: "NSE",
    name: "Kotak Mahindra Bank Ltd",
  },
];

export async function GET() {
  try {
    const kc = new KiteConnect({ api_key });
    kc.setAccessToken(access_token);

    // Get all NSE instruments (cache this in production)
    const instruments = await kc.getInstruments("NSE");
    const tokens = SYMBOLS.map((s) => {
      const inst = instruments.find(
        (i) => i.tradingsymbol === s.tradingsymbol && i.exchange === s.exchange
      );
      return inst ? inst.instrument_token : null;
    }).filter(Boolean);

    // Fetch quotes
    const quotes = await kc.getQuote(tokens);

    // Format response
    const data = SYMBOLS.map((s, idx) => {
      const token = tokens[idx];
      const q = quotes[token];
      return q
        ? {
            name: s.name,
            symbol: s.tradingsymbol,
            price: q.last_price,
            change: (q.last_price - q.ohlc.open).toFixed(2),
            changePercent:
              (((q.last_price - q.ohlc.open) / q.ohlc.open) * 100).toFixed(2) +
              "%",
            time: new Date(q.timestamp).toLocaleString(),
            currency: "INR",
          }
        : null;
    }).filter(Boolean);

    return Response.json(data, { status: 200 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
