/* ---------------- Variables ---------------- */
let coinCount = 100;
let heartCount = 0;
let copyCount = 0; // Copy count challenge

const coinDisplay = document.getElementById("coinCount");
const heartDisplay = document.getElementById("heartCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");


/* ---------------- Heart Button ---------------- */
document.querySelectorAll(".heart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    heartCount++;
    if (heartDisplay) heartDisplay.textContent = heartCount;
  });
});


/* ---------------- Copy Button ---------------- */

document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const number = e.target.closest(".card").querySelector(".hotline").textContent;
    navigator.clipboard.writeText(number);
    alert("Copied: " + number);

    
    

    // Increase copy count

copyCount++;
    if (copyDisplay) copyDisplay.textContent = copyCount + " Copy";
  });
});


/* ---------------- Call Button ---------------- */
document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const service = e.target.dataset.service;
    const number = e.target.dataset.number;

    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coinCount -= 20;
    if (coinDisplay) coinDisplay.textContent = coinCount;

    alert(`Calling ${service} at ${number}`);

    // Add to history with exact time
    const now = new Date();
    const timeStr = now.toLocaleTimeString(); // e.g. 3:25:42 PM
    const li = document.createElement("li");
    li.textContent = `${service} - ${number} (Time: ${timeStr})`;
    historyList.prepend(li);
  });
});


/* ---------------- Clear History ---------------- */
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});


