/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

//prendo il conteniroe dei box
const gameArea = document.getElementById('sd-game-area');
//mi serve un bottone che raccolga i dati della scelta utente

document.getElementById('btn-start').addEventListener('click', function(){
  let numberBox;
  const levelChoice = document.getElementById('level-choice').value;

  if(levelChoice === 'Easy'){
    numberBox = 49;
  }else if(levelChoice === 'Hard'){
    numberBox = 81;
  }else{
    numberBox = 100;
  }

initGame(numberBox);
})


//function

//funzione che stampa in pagina tot box
function initGame(parametroN){

  for( let i = 0; i < parametroN; i++ ){

    const boxEr = createBoxElement( gameArea );
    boxEr.addEventListener('click', function(){
      this.classList.add('check');
    })

  }

}


//funzione che crea l'elemento e lo appende in un contenitore
function createBoxElement(container){

  const box = document.createElement('div');
  box.className = 'sd-box';
  box.classList.add('easy');
  container.append(box);

  return box;
}