const counterElement = document.querySelector ('#Counter')
const incrementBtn = document.querySelector ('#increment')
const decrementBtn = document.querySelector ('#decrement')
const resetBtn = document.querySelector ('#Reset')
// console.log (resetBtn, 'resetBtn')

let count = 0;

function updateCounter (){
    counterElement.textContent = count;
}
incrementBtn.addEventListener ('click', ()=>{
    count ++;
    updateCounter();
} );

decrementBtn.addEventListener ('click', ()=>{
    count --;
    updateCounter();
});
resetBtn.addEventListener ('click',()=>{
    count = ""; 
    updateCounter();
})

updateCounter();