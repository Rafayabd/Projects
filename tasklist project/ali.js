//dom Selected Items.
const taskForm = document.querySelector ("#task-form");
// console.log (taskForm, "taskForm");
const taskInput = document.querySelector ("#task");
// console.log (taskInput, "taskInput");
const collection = document.querySelector (".collection");
// console.log(collection, "collection");
const clearTaskBtn = document.querySelector (".clear-tasks");
// console.log (clearTaskBtn, "clearTasksBtn");
const filterInput = document.querySelector ("#filter");
// console.log (filterInput, "filterInput");



taskForm.addEventListener ('submit', onTaskSubmitHandler);
function onTaskSubmitHandler(event){
  event.preventDefault();
  const taskInputValue = taskInput.value;
  // console.log (taskInputValue, "taskInputvalue");
  if (!taskInputValue){
    alert ("please enter the task input field value");
    return;
  }


  const listElement = document.createElement ('li');
  listElement.className = 'collection-item';
  listElement.innerHTML = `
  ${taskInputValue}
  <a href="#" class="delete-item secondary-content">
             <i class="fa fa-remove"></i>
         </a>`

         collection.append(listElement);
         taskInput.value = "";
         bindDeletetaskIcon ();
}
function bindDeletetaskIcon (){
  const selectAllDeleteIcons = document.querySelectorAll ('.delete-item i'); 
  selectAllDeleteIcons.forEach(function(singleBtnIcon){
// console.log (singleBtnIcon, "singleBtnIcon");
  singleBtnIcon.addEventListener("click", removeTaskHandler);  
  });
  // console.log (selectAllDeleteIcons, "selectAllDeleteIcons");
}
 function removeTaskHandler(event) {
  event.preventDefault ();
  // console.log ("icon clicked!");
  const currentElement = event.target;
  console.log (currentElement, "currentElement");
  if(confirm("Are you sure")){

  }
  currentElement.parentElement.parentElement.remove (); 
 }


 clearTaskBtn.addEventListener("click", clearTaskBtnHandler);
 function clearTaskBtnHandler(event){
  event.preventDefault();
  if(confirm("Are you sure")){
    collection.innerHTML="";
  }
 }

 filterInput.addEventListener("input", filterInputHandler);

 function filterInputHandler(event) {
   event.preventDefault();
   const currentElement = event.target;
   const searchValueOfFilter = currentElement.value.toLowerCase();
 
   const selectAllItems = document.querySelectorAll(".collection-item");
 
   selectAllItems.forEach(function (singleItem) {
     const itemText = singleItem.innerText.toLowerCase();
     if (itemText.indexOf(searchValueOfFilter) == -1) {
       singleItem.style.display = "none";
     } else {
       singleItem.style.display = "block";
     }
   });
 }

 function getOldTaskFromLocalStorage(){
  const getOldTaskFromLocalStorage = localStorage.getItem("task");
if(getOldTaskFromLocalStorage){
  return JSON.parse(getOldTaskFromLocalStorage);
} else {
  return [];
}}


 function storeTasksInLocalStorage(taskInputValue) {
  const oldTasks = getTaskFromLocalStorage();
  oldTasks.push(taskInputValue);
  localStorage.setItem("task", JSON.stringify(oldTasks));
 }

 document.addEventListener("DOMContentLoaded", getTaskFromStorageAndAppendToDom);
 function getTaskFromStorageAndAppendToDom(){
  const oldTasks  = getOldTaskFromLocalStorage ();
  oldTasks.forEach (function (singleTask){
  appendTaskWithDelete (singleTask);
 });
 }

 function removeTaskFromLocalStorage(taskValue) {
  console.log(taskValue, "taskValue agai");
  const oldTasks = getTasksFromLocalStorage();
  oldTasks.forEach(function (singleTaskFromLocalStorage, index) {
    if (singleTaskFromLocalStorage === taskValue) {
      console.log(taskValue, "taskValue match hogai ");
      oldTasks.splice(index, 1);
    }
  });

  console.log(oldTasks, "ye array banna haiii");

  localStorage.setItem("tasks", JSON.stringify(oldTasks));
}
