const button = document.querySelector ("#button");
const outputDiv = document.querySelector ("#output");

button.addEventListener ("click", function(event){
    event.preventDefault();
    fetch ("style.txt")
    .then(function(resolveData){
        return resolveData.text();
    })

    .then(function(data){
        outputDiv.innerHTML= data;
    })
    .catch(function(rejectData){
        console.log(rejectData, "rejectedData")
    });
});