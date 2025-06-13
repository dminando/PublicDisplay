// this is to define the cursor on an axis in reference to the hover effect
const syncPointer = ({ x: pointerX, y: pointerY }) => {
    const x = pointerX.toFixed(2)
    const y = pointerY.toFixed(2)
    const xp = (pointerX / window.innerWidth).toFixed(2)
    const yp = (pointerY / window.innerHeight).toFixed(2)
    document.documentElement.style.setProperty('--x', x)
    document.documentElement.style.setProperty('--xp', xp)
    document.documentElement.style.setProperty('--y', y)
    document.documentElement.style.setProperty('--yp', yp)
  }
  document.body.addEventListener('pointermove', syncPointer)





// Array of objects Quotes(quote: , author:)
var quotes = [
    { quote: "Your attitude, not your aptitude, determines your altitude", author: "Zig Ziglar" },
    { quote: "A man's worth is determined by how much truth he can tolerate...", author: "Friedrich Nietzsche" },
    { quote: "Every failure brings with it the seed of an equivalent advantage.", author: "Napoleon Hill" },
    { quote: "Every man is what he is because of the dominating thoughts which he permits to occupy his mind.", author: "Napoleon Hill" },
    { quote: "There are no limitations to the mind, except those we acknowledge.", author: "Napoleon Hill" },
    { quote: "Many people never get a taste of their true potential because they've decided to entertain only a limited view of what they can do.", author: "Grandmaster Kevin Horsely" },
    { quote: "Many of life's faliures are people who do not realize how close they were to success when they gave up.", author: "Thomas Edison" },
    { quote: "The only person that never makes mistakes… is the person that does nothing at all.", author: "Albert Einstein" },
    { quote: "I dont like to gamble, but if there's one thing I'm willing to bet on, it's myself.", author: "Beyonce" },
    { quote: "We are what we repeatedly do.", author: "Aristotle" },
    { quote: "Many people will not head down the street until all the lights are green. That is why they dont go anywhere.", author: "Robert Kiyosaki" },
    { quote: "If you're not humble, life will visit humbleness upon you.", author: "Mike Tyson" },
    { quote: "If you set your goals ridiculously high and it's a faliure, you will fail above everyone elses successes.", author: "James Cameron" },
    { quote: "Your decisions shape your destiny.", author: "Tony Robbins" },
    { quote: "Success is doing the right things well five thousand times over.", author: "Tony Robbins" },
    { quote: "It doesn't matter how smart you are or aren't, you need to make up in hard work what you lack in experience, skill, intelligence, or innate ability.", author: "Darren Hardy" },
    { quote: "The life we end up with is simply an accumulation of all the choices we make.", author: "Darren Hardy" },
    { quote: "Step by step, day by day, your choices will shape your actions until they become habits, where practice makes them permanent.", author: "Darren Hardy" },
    { quote: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.", author: "Martin Luther King Jr." },
    { quote: "Success is the ability to go from one failure to another with no loss of enthusiasm.", author: "Winston Churchill" },
    { quote: "To be successful at anything, the truth is, you dont have to be special... You just have to be what most people aren't: consistent, determined, and willing to work for it.", author: "Tom Brady" },
    { quote: "The most important conversations you'll ever have are the ones you'll have with yourself.", author: "David Goggins" },
    { quote: "A wise man makes his own luck...", author: "Fortune Cookie" },
    { quote: "The man who chases two rabbits, catches neither.", author: "Confucius" },
    { quote: "You cannot see the future with your eyes, you must see it with your mind.", author: "Tony Robbins" },
    { quote: "You cannot see what you dont look for, and you cannot look for what you dont believe in.", author: "Darren Hardy" }
]
// How many quotes are there? 
console.log('number of quotes:', quotes.length);


function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    console.log(randomNumber);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber].quote;
    document.getElementById('quoteAuthor').innerHTML = "~ " + quotes[randomNumber].author;
}
