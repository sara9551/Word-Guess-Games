
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

var letter;
var ans;
var count = 0;
var answerArray = [];

function initiate() {
  for (var i = 0; i < halloweenType.length; i++) {
    answerArray[i] = "_";
  }
console.log(answerArray);

  ans = answerArray.join(" ");

  document.getElementById("answer").innerHTML = ans;
}

function letter() {
  var letter = document.getElementById("letter").value;

  if (letter.length > 0) {
    for (var i = 0; i < halloweenType.length; i++) {
      if (halloweenType[i] === letter) {
        answerArray[i] = letter;
      }
    }

    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }

    count++;
  if (count >= 10) {
    alert("You're lives have ended, you have lost. Please, refresh the page.");
    console.log(count);
  }

}