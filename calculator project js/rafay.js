const getAllButtonsElements = document.querySelectorAll(".btn");
// console.log(getAllButtonsElements, "getAllButtonsElements");
const screenInput = document.querySelector (".screen");
// console.log(screen, "screen");
const selectEqualBtn = document.querySelector (".btn-equal");
// console.log (selectEqualBtn, "selectEqualBtn");
const clearButton = document.querySelector (".btn-clear");
// console.log (clearButton, "clearButton");


getAllButtonsElements.forEach(function(singleButton){
    singleButton.addEventListener("click", function(event){
        // console.log(singleButton, "singleButton");
        event.preventDefault();
        const currentElement = event.target;
        const buttonValue = currentElement.getAttribute("data-num");
        screenInput.value+= buttonValue;
        screenInput.value == buttonValue;
    } );
});

selectEqualBtn.addEventListener ("click", function(event){
    event.preventDefault();
    screenInput.value = eval(screenInput.value);
});

clearButton.addEventListener ("click", function (event){
    event.preventDefault();
    screenInput.value = "";

});

screenInput.addEventListener("input", function (event) {
    event.preventDefault();
    const currentElement = event.target;
    //it's mean you are entering the a to z so it will return true
    if (onlyLetters(currentElement.value)) {
      currentElement.value = "";
    }
  });

  function onlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
  }


