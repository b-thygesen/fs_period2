var jokes = [
  "A day without sunshine is like, night.",
  "At what age is it appropriate to tell my dog that he's adopted?",
  "I intend to live forever, or die trying"
];

module.exports = {
  allJokes: jokes,
  getRandomJoke: _getRandomJoke,
  addJoke: _addJoke,
}

function _getRandomJoke() {
  var rNum = Math.floor(Math.random() * jokes.length - 1) + 1;
  return jokes[rNum];
}

function _addJoke(addJoke) {
  jokes.push(addJoke);
}
