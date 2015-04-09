var JOKES = [
  {text: 'Why do golfers wear two pairs of pants?', punchline: 'In case they get a hole in one!'},
  {text: 'What do you call a seagull that flies over the bay?', punchline: 'A bagel'},
  {text: 'Why didn\'t God make two yogi bears?', punchline: 'Because he made a boo boo.'},
  {text: 'Why does Snoop Dog carry an umbrella?', punchline: 'Fo drizzle'},
  {text: 'How many hipsters does it take to screw in a lightbulb?', punchline: 'It\'s a pretty obscure number, you\'ve probably never heard of it.'}
];

var joker = function() {
  var index = Math.floor((Math.random() * JOKES.length) + 0);
  var joke = JOKES[index];
  var jokeText = document.getElementById('joke-text');
  jokeText.innerHTML = joke.text;
  var jokePunchline = document.getElementById('joke-punchline');
  jokePunchline.innerHTML = joke.punchline;
};

var uiColor = function() {
  var button = document.getElementById('generate');
  var input = document.getElementById('uicolor');
  var hex1 = document.getElementById('hex1');
  var hex2 = document.getElementById('hex2');
  var swatch = document.getElementById('swatch');
  var outputContainer = document.getElementById('output-container');

  var letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  var colorWithRed = function(method) {
    var output = [];
    var matches = method.match(/colorWithRed:(\d?\.?\d*)\s+green:(\d?\.?\d*)\s+blue:(\d?\.?\d*)\s+alpha:(\d?\.?\d*)/);
    if(typeof(matches) == 'object') {
      var red = Math.round(255 * parseFloat(matches[1]));
      var green = Math.round(255 * parseFloat(matches[2]));
      var blue = Math.round(255 * parseFloat(matches[3]));
      var alpha = Math.round(255 * parseFloat(matches[4]));

      var parts = [alpha, red, green, blue];
      for(var i = 0; i < parts.length; i++) {
        var part = parts[i];
        var comp1 = Math.floor(part / 16);
        var comp2 = part % 16;
        if(comp1 > 9) {
          output.push(letters[comp1 - 10]);
        } else {
          output.push(comp1);
        }
        if(comp2 > 9) {
          output.push(letters[comp2 - 10]);
        } else {
          output.push(comp2);
        }
      }
    }
    return output.join("");
  };

  var colorWithWhite = function(method) {
    var output = [];
    var matches = method.match(/colorWithWhite:(\d?\.?\d*)\s+alpha:(\d?\.?\d*)/);
    if(typeof(matches) == 'object') {
      var white = Math.round(255 * parseFloat(matches[1]));
      var alpha = Math.round(255 * parseFloat(matches[2]));
      var parts = [alpha, white, white, white];
      for(var i = 0; i < parts.length; i++) {
        var part = parts[i];
        var comp1 = Math.floor(part / 16);
        var comp2 = part % 16;
        if(comp1 > 9) {
          output.push(letters[comp1 - 10]);
        } else {
          output.push(comp1);
        }
        if(comp2 > 9) {
          output.push(letters[comp2 - 10]);
        } else {
          output.push(comp2);
        }
      }
      return output.join("");
    }
  };


  button.onclick = function() {
    var value = input.value;
    var out;
    //console.log('wtf: %s', value);
    if(value.match(/colorWithRed/)) {
      out = colorWithRed(value);
      hex1.innerHTML = out;
      hex2.innerHTML = out;
      outputContainer.style.display = 'block';
      swatch.style.backgroundColor = '#' + out.substr(2, out.length);
    }
    if(value.match(/colorWithWhite/)) {
      out = colorWithWhite(value);
      hex1.innerHTML = out;
      hex2.innerHTML = out;
      outputContainer.style.display = 'block';
      swatch.style.backgroundColor = '#' + out.substr(2, out.length);
    }

    return false;
  };
};

var pageReady = function() {
  joker();
  uiColor();
};

window.onload = pageReady;