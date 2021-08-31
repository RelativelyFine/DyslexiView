// Initialize button with user's preferred font
let changeText = document.getElementById("changeText");

chrome.storage.sync.get("color", ({ color }) => {
    changeText.style.backgroundColor = color;
});