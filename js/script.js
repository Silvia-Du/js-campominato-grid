

const gameArea = document.getElementById('sd-game-area');

//evento
document.getElementById('btn-start').addEventListener('click', function(){

  gameArea.innerHTML = '';

  const levelChoice = document.getElementById('level-choice').value;
  const level = [100, 81, 49];
  const boxNumber = level[levelChoice];
  

  initGame(boxNumber, gameArea)
 
})


//function

/**
 * crea un'elemnto div-box e lo mette in un contenitore
 * @param {string} htmlElement 
 * @param {number} num 
 * @returns 
 */
 function createBoxElement(boxNumber, htmlElement){

  const box = document.createElement('div');
  box.className = 'sd-box';
  const boxXRow = Math.sqrt( boxNumber );
  const boxSize = `calc ( 100% / ${boxXRow})`;
  box.style.width = boxSize;
  box.style.height = boxSize;
  htmlElement.append(box);
  
  return box;
}

/**
 * stampa in pagina tot box, in una certa size in un contenitore 
 * @param {number} parametroN 
 * @param {string} placeInHtml 
 * @param {number} parameterSize 
 */
function initGame(boxNumber, htmlElement){
  
  for( let i = 1; i <= boxNumber; i++ ){
    
    const boxEr = createBoxElement(boxNumber, htmlElement);
    boxEr.innerHTML = `<span>${i}</span>`;
    boxEr.addEventListener('click', function(){
      this.classList.add('check');
  
    })
  }
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



