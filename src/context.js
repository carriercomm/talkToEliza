"use strict";

window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

var eliza = new ElizaBot();
var recognition = new speechRecognition();
recognition.lang = window.navigator.language;
recognition.continuous = true;

recognition.start();
recognition.onresult = function (event) {
  for (var i = event.resultIndex, l = event.results.length; i < l; ++i) {
    speak(eliza.transform(event.results[i][0].transcript));
  }
}

recognition.onError = function (event) {
  console.log(event);
}

