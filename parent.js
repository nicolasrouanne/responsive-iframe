// Add event listener for messages being massed from the iframe
const setHeight = e => {
  // Check that message being passed is the documentHeight
  if (typeof e.data === "string" && e.data.indexOf("documentHeight") > -1) {
    const height = e.data.split("documentHeight:")[1];
    const heightWithPadding = parseInt(height, 10) + 50; // add a bit of extra space

    // Change height of iframe
    document.getElementById("myIframe").height = `${heightWithPadding}px`;
  }
};

window.addEventListener("message", setHeight);
