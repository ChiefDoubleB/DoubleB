function shake() {

  var ball = document.getElementById("8ball")
  var messageText = document.getElementById("message")


  if (messageText != null) {
    messageText.parentNode.removeChild(messageText);
  }


  ball.classList.add("shake");


  setTimeout(function () { ball.classList.remove("shake"); }, 1000);


  setTimeout(function () { getFortune(); }, 1000);
}



function getFortune() {

  var fortunes = ['For Sure', 'It might be possible', 'Without a doubt', 'Yes -- definitely', 'Yep', 'Probably', 'Yes, Signs point to yes', 'Eh, why not?', 'Try again', 'Thats a no from me dawg', 'Dont count on it', 'Definitly not', 'My guy says no', 'Not lookin so good', 'Very unlikely']


  var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];


  var parent = document.getElementById("fortune");
  var newMessage = document.createElement("div");
  newMessage.setAttribute('id', "message");
  newMessage.innerHTML = "\"" + fortune + "\"";
  parent.appendChild(newMessage);
}