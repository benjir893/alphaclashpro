// const playNow = () => {
//   const play_now = document.getElementById("playnow");
//   const play_ground = document.getElementById("playground");
//   play_now.classList.add("hidden");
//   play_ground.classList.remove("hidden");

//   // or
//   // play_now.style.display = "none";
//   // play_ground.style.display = "block";
// };

// const playAgain = () => {
//   const play_again = document.getElementById("playagain");
//   const play_ground = document.getElementById("playground");
//   play_again.classList.add("hidden");
//   play_ground.classList.remove("hidden");
//   // or
//   // play_again.style.display = "none";
//   // play_ground.style.display = "block";
// };

// Another way to do this is:
const handleKeyPress = (event) => {
  const keypressed = event.key;
  const displatxt = document.getElementById("txtpara");
  const displaytxt = displatxt.innerText.toLowerCase();
  const score = parseInt(document.getElementById("score").innerText);
  const life = parseInt(document.getElementById("life").innerText);

  if (displaytxt === keypressed) {
    const newscore = score + 1;
    document.getElementById("score").innerText = newscore;
    removekeybordcolor(displaytxt);
    showRandomAlphabet();
    return score;
  } else {
    const newLife = life - 1;
    document.getElementById("life").innerText = newLife;
    if (newLife === 0) {
      // hideElement("playground");
      // showElement("playagain");
      // const removecustomeclass = document.getElementById("playagain");
      // removecustomeclass.classList.remove("custome-hidden");
      // const lastscore = document.getElementById("score").innerText;
      // const finalscore = document.getElementById("finalScore");
      // finalscore.innerText = lastscore;
      // every thing just put in a function name gameOver in function.js file and call from there...
      gameOver();
    }
    return life;
  }
};

document.addEventListener("keyup", handleKeyPress);

const showRandomAlphabet = () => {
  const randomtext = document.getElementById("txtpara");
  const displaytxt = randomAlphabet();
  randomtext.innerText = displaytxt;
  setkeybordcolor(displaytxt);
};
const playNow = () => {
  hideElement("playnow");
  showElement("playground");
  showRandomAlphabet();
};

const playAgain = () => {
  hideElement("playagain");
  showElement("playground");
  document.getElementById("life").innerText = 5;
  document.getElementById("score").innerText = 0;
};
const exitGame = () => {
  window.close();
};
