
var halloweenTypeArr = [
  "pumpkin",
  "bat",
  "blood",
  "ghost",
  "coffin",
  "cobweb",
  "costume",
  "spider",
  "vampire",
  "witch",
  "casket",
  "cemetery",
  "spooky",
]

var halloweenType = halloweenTypeArr[Math.floor(Math.random() * halloweenTypeArr.length)];
console.log(halloweenType);

var ans;
var count = 0;
var underscores = [];

function initiate() {
  for (var i = 0; i < halloweenType.length; i++) {
    underscores[i] = "_ "
  }
  console.log(underscores);

  ans = underscores.indexOf(ans);

  document.getElementById("answer").innerHTML = underscores;
}

function letter() {
  var letter = document.getElementById("letter").value;
  console.log(letter)

  if (letter.length > 0) {
    for (var i = 0; i < halloweenType.length; i++) {
      if (halloweenType[i] === letter) {
        underscores[i] = letter;
      }
    }
    console.log(underscores)

    document.getElementById("answer").innerHTML = underscores;
    //document.getElementById("answer").reset(underscores); could not make it work
  }
  console.log(ans);

  count++;
  if (count >= 10) {
    alert("You're lives have ended, you have lost. Please, refresh the page.");
    console.log(count);
  }

};