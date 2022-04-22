

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

/**
 * stampa in pagina tot box, in una certa size in un contenitore 
 * @param {number} parametroN 
 * @param {string} placeInHtml 
 * @param {number} parameterSize 
 */
function initGame(parametroN, placeInHtml, parameterSize){
  
  for( let i = 1; i <= parametroN; i++ ){
    
    const boxEr = createBoxElement( placeInHtml, parameterSize );
    boxEr.innerHTML = `<span>${i}</span>`;
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
  
  if( num === 1 ){
    box.classList.add('easy');
   
  }else if( num === 2 ){
    box.classList.add('hard');

  }else{
    box.classList.add('crazy');
    
  }

  return box;
}

let estractNumber;
let selected;
const magazzinoNum =[];

//generatore numero univoco
function uniqueRandomNum( number ){

  for( let i = 0; i< number; i++ ){
    let check = false;
  
    while(!check){
      estractNumber = randomNum(1, number);
      console.log('numero singolo',estractNumber);
      if(!magazzinoNum.includes(estractNumber)){
        check = true;
        magazzinoNum.push(estractNumber);
        selected = estractNumber;
        console.log('--------->',selected);
      }
    }
    
    console.log('magazzino',magazzinoNum);
  
  }


}

function randomNum( min , max ){
  return Math.floor(Math.random() * (max - min +1) + min);
}



