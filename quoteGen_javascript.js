
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



Var = quotes = [
    'Your attitude, not your aptitude, determines your altitude ~ Zig Ziglar',
    'A man\'s worth is determined by how much truth he can tolerate... ~ Friedrich Nietzsche',
    'Every failure brings with it the seed of an equivalent advantage. ~ Napoleon Hill',
    'Every man is what he is because of the dominating thoughts which he permits to occupy his mind. ~ Napoleon Hill',
    'There are no limitations to the mind, except those we acknowledge. ~ Napoleon Hill',
    'Many people never get a taste of their true potential because they\'ve decided to entertain only a limited view of what they can do. ~ Grandmaster Kevin Horsely',
    'Many of life\'s faliures are people who do not realize how close they were to success when they gave up. ~ Thomas Edison',
    'The only person that never makes mistakes… is the person that does nothing at all. ~ Albert Einstein',
    'I dont like to gamble, but if there\'s one thing I\'m willing to bet on, it\'s myself. ~ Beyonce',
    'We are what we repeatedly do. ~ Aristotle',
    'Many people will not head down the street until all the lights are green. That is why they dont go anywhere. ~ Robert Kiyosaki',
    'If you\'re not humble, life will visit humbleness upon you. ~ Mike Tyson',
    'If you set your goals ridiculously high and it\'s a faliure, you will fail above everyone elses successes. ~ James Cameron',
    'Your decisions shape your destiny. ~ Tony Robbins',
    'Success is doing the right things well five thousand times over. ~ Tony Robbins',
    'It doesn\'t matter how smart you are or aren\'t, you need to make up in hard work what you lack in experience, skill, intelligence, or innate ability. ~ Darren Hardy',
    'The life we end up with is simply an accumulation of all the choices we make. ~ Darren Hardy',
    'Step by step, day by day, your choices will shape your actions until they become habits, where practice makes them permanent. ~ Darren Hardy',
    'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy. ~ Martin Luther King Jr.',
    'Success is the ability to go from one failure to another with no loss of enthusiasm. ~ Winston Churchill',
    'To be successful at anything, the truth is, you dont have to be special... You just have to be what most people aren\'t: consistent, determined, and willing to work for it. ~ Tom Brady',
    'The most important conversations you\'ll ever have are the ones you\'ll have with yourself. ~ David Goggins'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

