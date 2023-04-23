

let start = document.querySelector(".start");
start.addEventListener('click', () => {
  let leng = document.querySelector(".container").children.length;
  if(leng == 0){
  let n = parseInt(prompt("Enter grid size"));


  let grid = document.querySelector('.container');
  let div = document.createElement('div');
  div.className = 'box';
  grid.appendChild(div);
  let red1 = document.querySelector('.box');
  red1.style.width = `${n*4}em`;
  red1.style.height = `${n*4}em`;
            
                  
    for(let i = 0; i<n*4;i++){
                               
                                                 
    let box = document.querySelector(".box");
    for(let j=0; j<n*4; j++){
    let square =  document.createElement('div');
    
    square.className = "square";
    box.appendChild(square);
    }  
    box = document.querySelector(".box");
    let space = document.createElement("br");
    box.appendChild(space);       
    };}
    let square = document.querySelector('.square');

    document.querySelectorAll('.square').forEach(occurence => {
      occurence.addEventListener('mouseover', () => {
          occurence.style.backgroundColor = 'black';
      });
    });
  });
  
  
const erase = document.querySelector(".erase");
erase.addEventListener('click', () => {
  
  let box = document.querySelector(".container");
     
  let length = document.querySelector(".box").children.length;
     while(length != 0){
     box.removeChild(box.lastElementChild);
     }
     
        
});   

