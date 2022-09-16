const cells = document.querySelectorAll('.cell');
let player = 1;
const wins = [[0,1,2],[0,3,6], [0,4,8], [2,4,6], [3,4,5], [6,7,8], [1,4,7], [2,5,8]];
let redwins = [];
let yellowins = [];
let won = false;
const winner = document.querySelector('h3');
const btn = document.getElementById('reset');
// function to mark the clicked cell by players
const cellClicked = (cell, i) => {
  // red player turn
  if(player ==1){
  if(!won){
  redwins.push(i);
  console.log(redwins);
  const redplayer = cell.querySelector('.red');
  redplayer.classList.remove("hidden");
  player = 2;
  cell.classList.add("disabled");
  checkWinner();
}
}
// yellow player turn
else if(player ==2){
  yellowins.push(i);
  console.log(yellowins);
  const yellowplayer = cell.querySelector('.yellow');
  yellowplayer.classList.remove("hidden");
  cell.classList.add("disabled");
  player = 1;
  checkWinner();
}
}

// function to check for a winner every turn
const checkWinner =  () => {
  redwins.sort();
  yellowins.sort();
  wins.forEach((win, i) => {
    if(JSON.stringify(win)==JSON.stringify(redwins)){
      won = true;
      winner.textContent = "Winner is Red Player"
      }

    else if(JSON.stringify(win)==JSON.stringify(yellowins)){
      won = true;
      winner.textContent = "Winner is yellow Player"
    }

  });

// Draw condition
  if((redwins.length == 5 || yellowins.length == 5) && won == false){
    winner.textContent = "Draw";

  }

};


// Adding EventListeners to cells
cells.forEach((cell, i) => {
  cell.addEventListener("click", click = () => {
    cellClicked(cell,i );
  });

});

// Adding EventListener to reset button
btn.addEventListener("click", () => {
  location.reload();
});
