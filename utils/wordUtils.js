
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const angryWords = ['mad', 'frustrated', 'unfair', 'angry', 'red', 'kill', 'murder', 'anger', 'sucks', 
'sucky', 'hate', 'ugly', 'asshole','jerk', 'idiot', 'wtf', 'boss', 'annoyed', 'annoying', 'poop', 'shit', 'shitty', 'sick'
];

const sansPunctuation = (word) => {
  return word.split('').filter(char => alphabet.includes(char)).join('')
}

export const checkForAngryWords = (word) => {
  return angryWords.includes(sansPunctuation(word.toLowerCase()))
}

export const splitWordSets = (fullArr) => {
  let wordsSplit = {};
  const numWords = fullArr.length;
    if (numWords === 1 || numWords === 2) {
      wordsSplit.setOne = fullArr.join(' ');
      wordsSplit.setTwo = fullArr.join(' ');
      wordsSplit.setThree = fullArr.join(' ');
      return wordsSplit;
    }
  wordsSplit.setOne = fullArr.slice(0, Math.floor(numWords * .39)).join(' ');
  wordsSplit.setTwo = fullArr.slice(Math.floor(numWords * .39), Math.floor(numWords * .70)).join(' ');
  wordsSplit.setThree = fullArr.slice(Math.floor(numWords * .70), fullArr.length).join(' ');
  return wordsSplit;
}

//TEST TESTING
function sum(a, b) {
  return a + b;
}

module.exports = {
sum, 
alphabet, 
angryWords, 
sansPunctuation, 
checkForAngryWords, 
splitWordSets 
}
