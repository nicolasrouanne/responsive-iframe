// Add event listener for messages being massed from the iframe
const eventMethod = window.addEventListener
  ? "addEventListener"
  : "attachEvent";
const eventer = window[eventMethod];
const messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";

eventer(
  messageEvent,
  function(e) {
    // Check that message being passed is the documentHeight
    if (typeof e.data === "string" && e.data.indexOf("documentHeight") > -1) {
      const height = e.data.split("documentHeight:")[1];
      const heightWithPadding = parseInt(height) + 50; // add a bit of extra space

      // Change height of iframe
      document.getElementById("myIframe").height = heightWithPadding + "px";
    }
  },
  false
);
