const plusSign = document.getElementById('plus') ;
const minusSign = document.getElementById('minus') ;
const counterText = document.getElementById('counter-text') ;

let counter = 0 ;

plusSign.addEventListener('click', () => {
  counter++ ;
  counterText.style.animation = 'counter-text-up 0.5s ease-in-out' ;
  
  setTimeout(() =>{
    counterText.innerHTML = counter ;
  }, 250) ;
  
  setTimeout(() => {
    counterText.style.animation = '' ;
  }, 500) ;
}) ;

minusSign.addEventListener('click', () => {
  counter-- ;
  counterText.style.animation = 'counter-text-down 0.5s ease-in-out' ;

  setTimeout(() =>{
    counterText.innerHTML = counter ;
  }, 250) ;
  
  setTimeout(() => {
    counterText.style.animation = '' ;
  }, 500) ;
}) ;