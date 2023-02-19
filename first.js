let expressions = [
  {
    quotes:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    autor: "Nelson Mandela",
  },
  {
    quotes: "The way to get started is to quit talking and begin doing.",
    autor: "Walt Disney",
  },
  {
    quotes:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    autor: "Steve Jobs",
  },
  {
    quotes:
      "If life were predictable it would cease to be life, and be without flavor.",
    autor: "Eleanor Roosevelt",
  },
  {
    quotes:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    autor: "Oprah Winfrey",
  },
  {
    quotes:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    autor: "James Cameron",
  },
  {
    quotes: "Life is what happens when you're busy making other plans",
    autor: "John Lennon",
  },
  {
    quotes:
      "When you reach the end of your rope, tie a knot in it and hang on.",
    autor: "Franklin D. Roosevelt",
  },
  {
    quotes:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier. ",
    autor: "Mother Teresa",
  },
  {
    quotes:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.. ",
    autor: "Robert Louis Stevenson",
  },
  {
    quotes:
      "The future belongs to those who believe in the beauty of their dreams. ",
    autor: "Eleanor Roosevelt",
  },
  {
    quotes:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    autor: "Benjamin Franklin",
  },
];

const textInput = document.getElementById("textExpressions");
const autorInput = document.getElementById("autor");
const button = document.getElementById("butt");

button.addEventListener("click", changeInput);

function changeInput() {
  let number = Math.floor(Math.random() * expressions.length);
  textInput.innerHTML = expressions[number].quotes;
  autorInput.innerHTML = expressions[number].autor;
}
