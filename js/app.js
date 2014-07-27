var JOKES = [
  {text: 'Why do golfers wear two pairs of pants?', punchline: 'In case they get a hole in one!'},
  {text: 'What do you call a seagull that flies over the bay?', punchline: 'A bagel'},
  {text: 'Why didn\'t God make two yogi bears?', punchline: 'Because he made a boo boo.'},
  {text: 'Why does Snoop Dog carry an umbrella?', punchline: 'Fo drizzle'},
  {text: 'How many hipsters does it take to screw in a lightbulb?', punchline: 'It\'s a pretty obscure number, you\'ve probably never heard of it.'}
];
var pageReady = function() {
  var index = Math.floor((Math.random() * JOKES.length) + 0);
  var joke = JOKES[index];
  var jokeText = document.getElementById('joke-text');
  jokeText.innerHTML = joke.text;
  var jokePunchline = document.getElementById('joke-punchline');
  jokePunchline.innerHTML = joke.punchline;
};

window.onload = pageReady;
