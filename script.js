async function generateCard() {
    const nameInput = document.getElementById('name').value;
    const response = await fetch('words.json');
    const words = await response.json();

    const name = Math.random() < 0.2 ? (Math.random() < 0.5 ? "%first_name" : "Human") : nameInput;
    const greeting = `Season's Greetings, ${name}!

As the holiday season approaches, we want to extend our ${getRandomWord(words.adjectives)} wishes to you and your loved ones. May this Christmas bring you ${getRandomWord(words.adjectives)}, ${getRandomWord(words.adjectives)}, and an abundance of ${getRandomWord(words.adjectives)} love. It's a time to celebrate the ${getRandomWord(words.adjectives)} warmth of family and friends, to cherish the ${getRandomWord(words.adjectives)} moments we share, and to create ${getRandomWord(words.adjectives)} memories that will last a lifetime.

May your home be filled with ${getRandomWord(words.adjectives)} laughter, your heart with ${getRandomWord(words.adjectives)} contentment, and your days with ${getRandomWord(words.adjectives)} happiness. Whether you're enjoying a ${getRandomWord(words.adjectives)} feast, exchanging ${getRandomWord(words.adjectives)} gifts, or simply relaxing, we hope your holiday season is as ${getRandomWord(words.adjectives)} as you are.

Thank you for being a part of our community. We look forward to sharing many more ${getRandomWord(words.adjectives)} moments with you in the coming year.

${getRandomWord(words.adjectives)} Christmas and ${getRandomWord(words.adjectives)} New Year from the CDN!`;

    document.getElementById('card').innerText = greeting;
}

function getRandomWord(wordArray) {
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}
