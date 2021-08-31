// Initialize button with user's preferred font
let changeColor = document.getElementById("changeText");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});