const Bob = function() {
};

Bob.prototype.hey = function(phrase) {
  phrase = removeWhiteSpaceAtEndOfPhrase(phrase);
  if(checkSilence(phrase)) return 'Fine. Be that way!';
  if(onlyNumbers(phrase) && checkQuestion(phrase)) return 'Sure.';
  if(onlyNumbers(phrase)) return 'Whatever.';
  if(checkShouting(phrase)) return 'Whoa, chill out!';
  if(checkQuestion(phrase)) return 'Sure.';
  return 'Whatever.';
};

function removeWhiteSpaceReducer(acc, stringElement) {
  if(stringElement !== ' ' || (stringElement === ' ' && acc.length !== 0)) {
    acc.push(stringElement);
    return acc;
  }
  return acc;
}

function removeWhiteSpaceAtEndOfPhrase(phrase) {
  const removedWhiteSpace = phrase
    .split('')
    .reverse()
    .reduce(removeWhiteSpaceReducer, [])
    .reverse()
    .join('');
  return removedWhiteSpace;
}

function checkSilence(phrase) {
  const whiteSpace = ['', ' ', '\t', '\n', '\r'];
  return phrase
    .split('')
    .every(stringElement => {
      return whiteSpace.includes(stringElement);
    });
}

function onlyNumbers(phrase) {
  const acceptableStrings = ['?', ' ', ',', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  return phrase
    .split('')
    .every(stringElement => {
      return acceptableStrings.includes(stringElement);
    });
}

function checkQuestion(phrase) {
  return phrase[phrase.length - 1] === '?';
}

function checkShouting(phrase) {
  return phrase
    .split('')
    .every(letter => {
      return letter === letter.toUpperCase();
    });
}

module.exports=Bob;
