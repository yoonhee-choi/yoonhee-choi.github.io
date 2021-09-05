const quotes = [
  {
    quote: "the way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Whatever you do, do it well.",
    author: "wWalt Disney",
  },
  {
    quote: "What we think, we become.",
    author: "buddha",
  },
  {
    quote: "Be so good they can’t ignore you.",
    author: "Steve Martin",
  },
  {
    quote: "Dream as if you’ll live forever, live as if you’ll die today.",
    author: "James Dean",
  },
  {
    quote: "Never let your emotions overpower your intelligence.",
    author: "Drake",
  },
  {
    quote: "Wanting to be someone else is a waste of who you are.",
    author: "Kurt Cobain",
  },
  {
    quote: "May your choices reflect your hopes, not your fears.",
    author: "Nelson Mandela",
  },

  {
    quote: "I have nothing to lose but something to gain.",
    author: "Eminem",
  },

  {
    quote: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
