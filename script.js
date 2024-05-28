let resbtn = document.querySelector(".game_result");
let choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const user_choice = choice.getAttribute("id");
    playGame(user_choice);
  });
});

const rancomp_choice = () => {
  let arr = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return arr[index];
};

const draw = () => {
  resbtn.innerText = "Game was Draw!";
  resbtn.style.backgroundColor = "#0f0326";
  console.log("draw");
};

const playGame = (user_choice) => {
  const comp_choice = rancomp_choice();
  console.log("user choice : ",user_choice);
  console.log("comp choice : ",comp_choice)
  if (user_choice === comp_choice) {
    draw();
  } else {
    let user_win = true;
    if (user_choice === "rock") {
      user_win = comp_choice === "paper" ? false : true;
    } else if (user_choice === "paper") {
      user_win = comp_choice === "scissors" ? false : true;
    } else {
      user_win = comp_choice === "rock" ? false : true;
    }
    winner(user_win);
  }
};

const winner = (user_win) => {
  if (user_win === true) {
    resbtn.innerText = "You won!";
    resbtn.style.backgroundColor = "Green";
  } else {
    resbtn.innerText = "You lose!";
    resbtn.style.backgroundColor = "Red";
  }
};
