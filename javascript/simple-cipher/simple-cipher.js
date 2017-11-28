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

Cipher.prototype.letterPosition = function(letter) {
  return this.shiftingArray.indexOf(letter);
};

Cipher.prototype.keyPosition = function(i) {
  return this.shiftingArray.indexOf(this.key.split('')[i]);
};

Cipher.prototype.makeKey = function(input) {
  while(this.key.length < input.length) {
    this.key = this.key + this.key;
  }
};

Cipher.prototype.encode = function(input) {
  this.makeKey(input);
  const resultArray = input.split('').map((letter, i) => this.shiftingArray[(this.letterPosition(letter) + this.keyPosition(i)) % 26]);
  return resultArray.join('');
};

Cipher.prototype.decode = function(input) {
  this.makeKey(input);
  const resultArray = input.split('').map((letter, i) => this.shiftingArray[(26 + this.letterPosition(letter) - this.keyPosition(i)) % 26]);
  return resultArray.join('');
};

module.exports = Cipher;
