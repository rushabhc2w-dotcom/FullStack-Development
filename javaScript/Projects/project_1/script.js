const quotes =[
    "Be yourself; everyone else is already taken. — Oscar Wilde",
    "I think, therefore I am. — René Descartes",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. — Albert Einstein",
    "Life isn't about getting and having, it's about giving and being. — Kevin Kruse",
    "Whatever the mind of man can conceive and believe, it can achieve. — Napoleon Hill",
    "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. — Robert Frost",
    "You miss 100% of the shots you don't take. — Wayne Gretzky",
    "The best time to plant a tree was 20 years ago. The second best time is now. — Chinese Proverb",
    "An unexamined life is not worth living. — Socrates",
    "Eighty percent of success is showing up. — Woody Allen",
    "Your time is limited, so don't waste it living someone else's life. — Steve Jobs",
    "Every child is an artist. The problem is how to remain an artist once he grows up. — Pablo Picasso",
    "Knowledge is power. — Sir Francis Bacon",
    "Life is like a box of chocolates. You never know what you're gonna get. — Forrest Gump",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. — Albert Einstein",
    "May the Force be with you. — Star Wars",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "In three words I can sum up everything I've learned about life: it goes on. — Robert Frost",
    "The journey of a thousand miles begins with one step. — Lao Tzu",
    "Stay hungry, stay foolish. — Steve Jobs",
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');
button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*20);

    quote.textContent=quotes[index];
});