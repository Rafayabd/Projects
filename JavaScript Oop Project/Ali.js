const titleInputField = document.querySelector ("#title");
const authorInputField = document.querySelector ("#author");
const isbnInputField = document.querySelector ("#isbn");
const bookformElement = document.querySelector ("#book-form");
const selectTBodyList = document.querySelector ("#book-list")
const containerDiv = document.querySelector (".container");
// console.log (titleInput,authorInput,isbnInput,bookformElement);


function UI (){}
UI.prototype.addBook = function(objectForBook){
//     <tr>
//     <td>muzammil</td>
//     <td>muzammil</td>
//     <td>muzammil</td>
//     <td><a href="#" class="delete">X<a></td>
//   </tr>
   

    const tableRow = document.createElement ("tr");
    tableRow.innerHTML = `
    <td>${objectForBook.title}</td>
    <td>${objectForBook.author}</td>
    <td>${objectForBook.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `
  selectTBodyList.appendChild(tableRow);
};
UI.prototype.resetFields = function(){
  titleInputField.value = "";
  authorInputField.value = "";
  isbnInputField.value = "";
};

UI.prototype.showAlert = function (message = "" , className = "success"){
  const createDiv = document.createElement ("div");
  createDiv.className = `alert ${className}`;
  createDiv.innerText = message;
  containerDiv.insertBefore (createDiv, bookformElement);
  setTimeout (function(){
    createDiv.remove();{

  }
  }, 2000);
};



bookformElement.addEventListener("submit", bookformSubmitHandler);
function bookformSubmitHandler (event){
    event.preventDefault ();  
    const titleValue = titleInputField.value;
    const authorValue = authorInputField.value;
    const isbnValue = isbnInputField.value;
    // console.log (titleValue,authorValue,isbnValue);
  const ui  = new UI ();


  if(!titleValue){
    ui.showAlert ("title is empty", "error");
    return;
  }
  if(!authorValue){
    ui.showAlert ("author is empty", "error");
    return;
  }
  if(!isbnValue){
    ui.showAlert ("isbn is empty", "error");
    return;
  }


  const objectForBook = {title: titleValue, author:authorValue , isbn: isbnValue}
  ui.addBook (objectForBook);
  ui.resetFields();
  ui.showAlert ("Book is Added Sucessfully!!!");
}

selectTBodyList.addEventListener("click", allTbodyClickHandler);
function allTbodyClickHandler (event){
  event.preventDefault();
  const currentEement = event.target;
  if (currentEement.className === "delete"){
    const exactTableRow = currentEement.parentElement.parentElement;
  if(confirm("Are you sure")){
    exactTableRow.remove();
    const ui = new UI();
    ui.showAlert ("book is removed successfully", "error");
  }
  }}