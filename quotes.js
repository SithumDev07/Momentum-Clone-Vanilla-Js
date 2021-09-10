const quotes = [
  {
    id: 1,
    quote: "“The purpose of our lives is to be happy.”",
    author: "Dalai Lama",
  },
  {
    id: 2,
    quote: "“Life is what happens when you’re busy making other plans.”",
    author: "John Lennon",
  },
  {
    id: 3,
    quote:
      "“Many of life’s failures are people who did not realize how close they were to success when they gave up.”",
    author: "Thomas A. Edison",
  },
  {
    id: 4,
    quote:
      "“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”",
    author: "Henry Ford",
  },
  {
    id: 5,
    quote:
      "“The big lesson in life, baby, is never be scared of anyone or anything.”",
    author: "Frank Sinatra",
  },
  {
    id: 6,
    quote:
      "“Curiosity about life in all of its aspects, I think, is still the secret of great creative people.”",
    author: "Leo Burnett",
  },
  {
    id: 7,
    quote:
      "“Life is not a problem to be solved, but a reality to be experienced.”",
    author: "Soren Kierkegaard",
  },
  {
    id: 8,
    quote:
      "“Don’t settle for what life gives you; make life better and build something.”",
    author: "Ashton Kutcher",
  },
  {
    id: 9,
    quote:
      "“Everything negative – pressure, challenges – is all an opportunity for me to rise.”",
    author: "Kobe Bryant",
  },
  {
    id: 10,
    quote:
      "“In three words I can sum up everything I’ve learned about life: It goes on.”",
    author: "Robert Frost",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// * Math object has many methods, there is a method called random

quote.innerText = quotes[Math.floor(Math.random() * quotes.length)].quote;
author.innerText = quotes[Math.floor(Math.random() * quotes.length)].author;
