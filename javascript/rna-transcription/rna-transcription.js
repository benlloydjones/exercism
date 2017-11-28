const Transcriber = function() {
};

Transcriber.prototype.toRna = function(dna) {
  const transcription = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };
  if(!dna.split('').every(base => base === 'G' || base === 'C' || base === 'T' || base === 'A')) throw Error('Invalid input');
  return dna.split('').map(base => transcription[base]).join('');
};

module.exports = Transcriber;
