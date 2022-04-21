/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

const gameArea = document.getElementById('sd-game-area');

//evento
document.getElementById('btn-start').addEventListener('click', function(){

  gameArea.innerHTML = '';

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
//questa funzione è generica con piu elementi per poter stampare in quelunque contenitore e con diverse taglie.
/**
 * stampa in pagina tot box, in una certa size in un contenitore 
 * @param {number} parametroN 
 * @param {string} placeInHtml 
 * @param {number} parameterSize 
 */
function initGame(parametroN, placeInHtml, parameterSize){
  
  for( let i = 0; i < parametroN; i++ ){

    const boxEr = createBoxElement( placeInHtml, parameterSize );
    boxEr.addEventListener('click', function(){
      this.classList.add('check');
  
    })
  }
}


/**
 * crea un'elemnto div-box e lo mette in un contenitore
 * @param {string} htmlElement 
 * @param {number} num 
 * @returns 
 */
function createBoxElement(htmlElement, num){

  const box = document.createElement('div');
  box.className = 'sd-box';
  htmlElement.append(box);
  box.innerHTML = `<span> X </span>`;
  if( num === 1 ){
    box.classList.add('easy');

  }else if( num === 2 ){
    box.classList.add('hard');

  }else{
    box.classList.add('crazy');
  }

  return box;
}