import { useEffect, useState } from "react";
export default function QuoteMaker() {
  const [quote, setQuote] = useState("");
  async function fetchQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    const quotes = await response.json();
    return quotes;
  }
  useEffect(() => {
    fetchQuotes().then((data) => {
      setQuote((prev) => data[Math.floor(Math.random() * 1500)].text);
    });
  }, []);

  return (
    <div className="header">
      <p>"{quote}"</p>
    </div>
  );
}
