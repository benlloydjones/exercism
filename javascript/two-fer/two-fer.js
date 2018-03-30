var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  if(!who) return 'One for you, one for me.';
  return 'One for ' + who + ', one for me.';
  // your code goes here
  // You will have to use the parameter who
  // in some way. In this example, it is just
  // returned, but your solution will have to
  // use a conditional.
};

module.exports = TwoFer;
