const cells = document.querySelectorAll('.cell');
const computer = document.getElementById('computer');
let playersCount = 2;
let player = 1;
let redwins = [];
let yellowins = [];
let won = false;
const winner = document.querySelector('h3');
const btn = document.getElementById('reset');

console.log(cells[0]);
// function to mark the clicked cell by players
const cellClicked = (cell, i) => {
  // Two Players
  if(playersCount==2){
      // red player turn
    if(player ==1){
    if(!won){
    redwins.push(i);
    const redplayer = cell.querySelector('.red');
    redplayer.classList.remove("hidden");
    player = 2;
    cell.classList.add("disabled");
    cellsCombinations();
  }
  }
  // yellow player turn
  else if(player ==2){
    yellowins.push(i);
    const yellowplayer = cell.querySelector('.yellow');
    yellowplayer.classList.remove("hidden");
    cell.classList.add("disabled");
    player = 1;
    cellsCombinations();
   }
}
// Vs Computer
else{
  if(!won){
  redwins.push(i);
  const redplayer = cell.querySelector('.red');
  redplayer.classList.remove("hidden");
  player = 2;
  cell.classList.add("disabled");
  computerTurn();
  cellsCombinations();
}
}

}

// function to check for a winner every turn
const checkWinner =  (a, b, c) => {
  if(cells[a].querySelector('.yellow').classList.contains('hidden')
  && cells[b].querySelector('.yellow').classList.contains('hidden')
  && cells[c].querySelector('.yellow').classList.contains('hidden')
  && !cells[a].querySelector('.red').classList.contains('hidden')
  && !cells[b].querySelector('.red').classList.contains('hidden')
  && !cells[c].querySelector('.red').classList.contains('hidden')
){
  won = true;
  winner.textContent = "Winner is Red Player";
}
if(cells[a].querySelector('.red').classList.contains('hidden')
&& cells[b].querySelector('.red').classList.contains('hidden')
&& cells[c].querySelector('.red').classList.contains('hidden')
&& !cells[a].querySelector('.yellow').classList.contains('hidden')
&& !cells[b].querySelector('.yellow').classList.contains('hidden')
&& !cells[c].querySelector('.yellow').classList.contains('hidden')){
  won = true;
  winner.textContent = "Winner is Yellow Player";
}

// Draw condition
  if((redwins.length == 5 || yellowins.length == 5) && won == false){
    winner.textContent = "Draw";

  }

};

// function to give the turn to computer
const computerTurn = () => {
  let emptyCells = [];
    let random;
    cells.forEach(function(cell,i){
      const cellContent = cell.querySelector('.red');
      const cellContents = cell.querySelector('.yellow');
      if(cellContent.classList.contains('hidden') && cellContents.classList.contains('hidden') ){
        emptyCells.push({cell,i});
      }

    });

    // computer marks a random EMPTY cell
    random = Math.ceil(Math.random() * emptyCells.length)-1;

    markCell(random, emptyCells);
};
const markCell = (random, emptyCells) => {
  if(emptyCells.length>0){
  emptyCells[random]['cell'].querySelector('.yellow').classList.remove('hidden');
  yellowins.push(random);
  cellsCombinations();
}
};

// function to check winning combinations
const cellsCombinations = () => {
checkWinner(0,1,2);
checkWinner(0,3,6);
checkWinner(0,4,8);
checkWinner(2,4,6);
checkWinner(3,4,5);
checkWinner(6,7,8);
checkWinner(1,4,7);
checkWinner(2,5,8);

};
// Adding EventListeners to cells
cells.forEach((cell, i) => {
  cell.addEventListener("click", click = () => {
    cellClicked(cell,i);
  });

});

// Adding EventListener to reset button
btn.addEventListener("click", () => {
  location.reload();
});
computer.addEventListener("click", () => {
  playersCount = 1;
  computer.classList.add('hidden');
});
