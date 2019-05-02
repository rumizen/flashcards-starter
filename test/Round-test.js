const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  
  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to return the current card', function() {
    const deck = new Deck([card1, card2, card3]);   
    const round = new Round(deck);
    expect(round.turns).to.equal(0);
    expect(round.returnCurrentCard()).to.equal(card1);

    round.takeTurn();

    expect(round.returnCurrentCard()).to.equal(card2);
    expect(round.turns).to.equal(1);
  }); 

  it('should be able to return the current card', function() {    
    const deck = new Deck([card1, card2, card3]);    
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.eql([]);
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('spleen')).to.equal('incorrect!');
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.eql([14]);
    expect(round.returnCurrentCard()).to.eql(card3);
  });
});