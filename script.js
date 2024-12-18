async function generateCard() {
    const nameInput = document.getElementById('name').value;
    const response = await fetch('words.json');
    const words = await response.json();

    const name = Math.random() < 0.2 ? (Math.random() < 0.5 ? "%first_name" : "Human") : nameInput;
    const greeting = `Season's Greetings, ${name}!

As the holiday season approaches, we want to extend our <em>${getRandomWord(words.adjectives)}</em> wishes to you and your loved ones. May this Christmas bring you <em>${getRandomWord(words.adjectives)}</em>, <em>${getRandomWord(words.adjectives)}</em>, and an abundance of <em>${getRandomWord(words.adjectives)}</em> love. It's a time to celebrate the <em>${getRandomWord(words.adjectives)}</em> warmth of family and friends, to cherish the <em>${getRandomWord(words.adjectives)}</em> moments we share, and to create <em>${getRandomWord(words.adjectives)}</em> memories that will last a lifetime.

May your home be filled with <em>${getRandomWord(words.adjectives)}</em> laughter, your heart with <em>${getRandomWord(words.adjectives)}</em> contentment, and your days with <em>${getRandomWord(words.adjectives)}</em> happiness. Whether you're enjoying a <em>${getRandomWord(words.adjectives)}</em> feast, exchanging <em>${getRandomWord(words.adjectives)}</em> gifts, or simply relaxing, we hope your holiday season is as <em>${getRandomWord(words.adjectives)}</em> as you are.

Thank you for being a part of our community. We look forward to sharing many more <em>${getRandomWord(words.adjectives)}</em> moments with you in the coming year.

<em>${getRandomWord(words.adjectives)}</em> Christmas and <em>${getRandomWord(words.adjectives)}</em> New Year from the CDN!`;

    document.getElementById('card').innerText = greeting;
}

function getRandomWord(wordArray) {
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}
