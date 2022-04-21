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
  let numberBox, size;
  const levelChoice = document.getElementById('level-choice').value;

  if(levelChoice === 'Easy'){
    numberBox = 49;
    size = 1;

  }else if(levelChoice === 'Hard'){
    numberBox = 81;
    size = 2;

  }else{
    numberBox = 100;
    size = 3;

  }

initGame(numberBox, gameArea, size );
})


//function

//funzione che stampa in pagina tot box
function initGame(parametroN, location, parameterSize){

  for( let i = 0; i < parametroN; i++ ){

    const boxEr = createBoxElement( location, parameterSize );
    boxEr.addEventListener('click', function(){
      this.classList.add('check');
    })
  }
}


//funzione che crea l'elemento e lo appende in un contenitore
function createBoxElement(container, parameter){

  const box = document.createElement('div');
  box.className = 'sd-box';
  container.append(box);

  if( parameter === 1 ){
    box.classList.add('easy');

  }else if( parameter === 2 ){
    box.classList.add('hard');

  }else{
    box.classList.add('crazy');
  }

  return box;
}