console.log("Welcome To the Tic Tac Toe");
const media = new Audio("./media.mpeg.mp3"),
  turnMusic = new Audio("./turn.mpeg.mp3"),
  gameOverMusic = new Audio("./game over.mpeg.mp3");
let chance = "X";
let isGameOver = false;

// This functon is for turn the value of a x and 0
const changeChance = () => {
  return chance === "X" ? "0" : "X";
};

// THat function check the who win
const checkWin = () => {
  let boxText = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach(element => {
    if ((boxText[element[0]].textContent === boxText[element[1]].textContent) && (boxText[element[2]].textContent === boxText[element[1]].textContent) && (boxText[element[0]].textContent !== "")) {
        document.querySelector('.text').textContent = boxText[element[0]].textContent + " " + " Won";
        isGameOver =true
        document.getElementsByTagName('img')[0].style.width = "65px";
        document.getElementsByTagName('img')[0].style.height = "85px";
        gameOverMusic.play();
      
    }
  });

} 
checkWin();

// That function implement the logi of the game
// media.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxTexts = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxTexts.textContent === "") {
      boxTexts.textContent = chance;
      chance = changeChance();
      turnMusic.play();
      checkWin();
      if(!isGameOver){
        console.log(document.querySelector('.text').textContent = "Turn For " + " " + chance);
      }
    }
  });
  console.log(boxTexts);
});


// This addeventlisteneer is used for button reset
let reset = document.querySelector(".btn");
reset.addEventListener("click", () => {
  let boxText = document.getElementsByClassName("boxText");
  Array.from(boxText).forEach((element) => {
    element.textContent = "";
  });
  chance = "X";
  isGameOver = false;
  document.querySelector(".text").textContent =
    "Turn For" + " " + chance;
  document.getElementsByTagName("img")[0].style.width = "0px";
});
