const quotes = [{
    quote: "No great man ever complains of want of opportunity.",
    author: "Ralph Waldo Emerson"
},
{
    quote: "A definite purpose, like blinders on a horse, inevitably narrows its possessor's point of view.",
    author: "Robert Frost",
},
{
    quote: "You create your opportunities by asking for them.",
    author: "Patty Hansen",
},
{
    quote: "If you can concentrate always on the present, you'll be a happy man.",
    author: "Paulo Cuelho",
},
{
    quote: "Success is never final.",
    author: "Sir Winston Churchill",
},
{
    quote: "A genius is just a talented person who does his homework.",
    author: "Thomas A. Edison",
},
{
    quote: "He who despises himself, respects himself as one who despises.",
    author: "Friedrich Nietzsche",
},
{
    quote: "Genius may have its limitations, but stupidity is not thus handicapped.",
    author: "Elbert Hubbard",
},
{
    quote: "A little sincerity is a dangerous thing, and a great deal of it is absolutely fatal.",
    author: "Oscar Wilde",
},
{
    quote: "I am not sincere, even when I say I am not.",
    author: "Jules Renard",
}]

const quote = document.querySelector(".quotes__quote");
const author = document.querySelector(".quotes__author");
const randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = randomQuotes.quote
author.innerText = `- ${randomQuotes.author}`