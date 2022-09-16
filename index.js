const cells = document.querySelectorAll('.cell');
let player = 1;

// function to mark the clicked cell by players
const cellClicked = (cell) => {
  if(player ==1){
  console.log("ello");
  const redplayer = cell.querySelector('.red');
  redplayer.classList.remove("hidden");
  player = 2;
  cell.classList.add("disabled");
}
else if(player ==2){
  const yellowplayer = cell.querySelector('.yellow');
  yellowplayer.classList.remove("hidden");
  player = 1;
}
}



// Adding EventListeners to cells
cells.forEach((cell) => {
  cell.addEventListener("click", click = () => {
    cellClicked(cell);
  });

});
