const Pangram = function(input) {
  this.input = input;
  this.allowedCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  this.testableInput = this.input.toLowerCase().split('').reduce((acc, cur) => {
    if(!acc.includes(cur) && this.allowedCharacters.includes(cur)) {
      acc.push(cur);
      return acc;
    } else {
      return acc;
    }
  }, []);
};

Pangram.prototype.isPangram = function() {
  if(this.testableInput.length === 26) {
    return true;
  } else {
    return false;
  }
};

module.exports = Pangram;
