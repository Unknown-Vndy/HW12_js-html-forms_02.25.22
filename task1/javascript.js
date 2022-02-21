'use strict';

const input = document.querySelector('input');
const result = document.querySelector('p');
input.addEventListener('input', volumeHandler);


function volumeHandler() {
   const numberRexExp = /^\d+$/;
   if (numberRexExp.test(input.value)) { 
      result.textContent = 4 / 3 * Math.PI * Math.pow(input.value, 3);
   } else {
      result.textContent = `inccorect data`;
   }
}