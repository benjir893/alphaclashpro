const hideElement = (elementId) => {
  document.getElementById(elementId).classList.add("hidden");
};

const showElement = (elementId) => {
  document.getElementById(elementId).classList.remove("hidden");
};

const randomAlphabet = () => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabets.split("");
  const randomIndex = Math.round(Math.random() * 25);
  const alphabet = alphabetArray[randomIndex];
  return alphabet;
};

const setkeybordcolor = (elementId) => {
  const keybord = document.getElementById(elementId);
  keybord.classList.add("bg-sky-500");
};
const removekeybordcolor = (elementId) => {
  const keybord = document.getElementById(elementId);
  keybord.classList.remove("bg-sky-500");
};

const removeAllkeysbgColor = (elementclass) => {
  const keys = document.getElementsByClassName(elementclass);
  for (const key of keys) {
    key.classList.remove("bg-sky-500");
  }
};
const gameOver = () => {
  hideElement("playground");
  showElement("playagain");
  const removecustomeclass = document.getElementById("playagain");
  removecustomeclass.classList.remove("custome-hidden");
  const lastscore = document.getElementById("score").innerText;
  const finalscore = document.getElementById("finalScore");
  finalscore.innerText = lastscore;
};
