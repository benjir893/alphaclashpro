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
