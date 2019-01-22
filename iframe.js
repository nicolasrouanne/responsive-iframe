// Get height of the main element in the iframe document
const documentHeight = document.getElementsByClassName("main-element")[0]
  .scrollHeight;

// Add some unique identifier to the string being passed
const message = "documentHeight:" + documentHeight;

// Pass message to (any*) parent document
parent.postMessage(message, "*");
