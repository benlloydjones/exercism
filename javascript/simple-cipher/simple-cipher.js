const Cipher = function(key) {
  this.keyTestCapitals = new RegExp('[A-Z]+');
  this.keyTestNumerals = new RegExp('[0-9]+');
  this.shiftingArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  if (typeof key !== 'undefined' && (this.keyTestCapitals.test(key) || this.keyTestNumerals.test(key) || key.length === 0)) {
    throw Error('Bad key');
  } else {
    this.key = key || 'aaaaaaaaaa';
  }

};

Cipher.prototype.encode = function(input) {
  let usedKey = this.key;
  while(usedKey.length < input.length) {
    usedKey = usedKey + usedKey;
  }
  const resultArray = input.split('').map((letter, i) => {
    const letterPosition = this.shiftingArray.indexOf(letter);
    const keyPosition = this.shiftingArray.indexOf(usedKey.split('')[i]);
    return this.shiftingArray[(letterPosition + keyPosition) % 26];
  });
  return resultArray.join('');
};

Cipher.prototype.decode = function(input) {
  let usedKey = this.key;
  while(usedKey.length < input.length) {
    usedKey = usedKey + usedKey;
  }
  const resultArray = input.split('').map((letter, i) => {
    const letterPosition = this.shiftingArray.indexOf(letter);
    const keyPosition = this.shiftingArray.indexOf(usedKey.split('')[i]);
    return this.shiftingArray[(26 + letterPosition - keyPosition) % 26];
  });
  return resultArray.join('');
};

module.exports = Cipher;
