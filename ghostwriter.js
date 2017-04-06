function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["Our mind ", "Knowledge ", "Our consciousness ", "An incredible fact "];
  var body = ["is the intelligence of ", "is the basic of ", "is considered the key to ", "is to keep balance between ", "is our future to "];
  var end = ["our selves ", "happiness"];
  randIndex = randomUpTo(intro.length - 1);
  sentence = intro[randIndex];
  randIndex = randomUpTo(body.length - 1);
  sentence += body[randIndex];
  randIndex = randomUpTo(end.length - 1);
  sentence += end[randIndex];
  //console.log(sentence);
  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
