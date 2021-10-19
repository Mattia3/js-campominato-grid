//1 - Recuperiamo le classi della difficoltà e il button e il container grid
//2 - al click sul bottone recuperiamo il valore della select
  //2.1 - al click (eventlistener)
    //2.2 - In base al livello scelto, andiamo a generare e stampare in html la nostra griglia
      //2.3 - questa dovrà tenere conto della scelta dell'utente per stampare il numero corretto di celle.
        
//3 - Stampiamo la griglia in base al livello scelto dll'utente

const difficolta = document.getElementById("difficolta");
const btnPlay = document.getElementById("btn-play");
const contGrid = document.getElementById("container-grid");

btnPlay.addEventListener("click", function(){
  const value = difficolta.value;
  const totalCell = numeroCelle(value);
  gridCreate(totalCell);
})

function numeroCelle(value){
  let  celleDif;
switch (parseInt(value)){
  case 1:
    celleDif = 100;
    break;

  case 2:
    celleDif = 81;
    break;

  case 3:
    celleDif = 49;
    break;
}

return celleDif;
}

function gridCreate(cellsNumber){
  contGrid.innerHTML = "";

  const perRowCells = Math.sqrt(cellsNumber);
  const cellSize = 100 / perRowCells;
  
  for(let i = 0; i < cellsNumber; i++){
   
    const cella = document.createElement("div")
    cella.classList.add("celle")
    if(difficolta.value === "1" ){
      cella.style.width = cellSize + "%"
      cella.style.height = cellSize + "%"
    }if(difficolta.value === "2"){
      cella.style.width = cellSize + "%"
      cella.style.height = cellSize + "%"
    }if(difficolta.value === "3"){
      cella.style.width = cellSize + "%"
      cella.style.height = cellSize + "%"
    }
    cella.innerHTML = [i +1];
    
    contGrid.append(cella)

    cella.addEventListener("click", backgroundCella)

  }
}


function backgroundCella(){
  this.classList.toggle("background-cella")
}

