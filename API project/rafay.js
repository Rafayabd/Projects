const apiBaseUrl = "https://jsonplaceholder.typicode.com";
const selectTbody = document.querySelector ('#todos-listing');
const selectCreatePostFormElement = document.querySelector ("#create-post-form");


const getPostsData = async function(){
fetch (`${apiBaseUrl}/posts`)
.then(function(response){
return response.json();
})

.then (function(data){
// console.log (data, "post data ");

if (Array.isArray(data)){
data.forEach(function(singlePostData){
const tableRowElement = document.createElement('tr');
tableRowElement.innerHTML = `<td id="post_id">${singlePostData.id}</td>
<td>${singlePostData.userId}</td>
<td>${singlePostData.title}</td>
<td>
<a class="btn btn-primary edit-btn"  data-post-id="${singlePostData.id}" data-toggle="modal"  href="#edit-post">Edit</a>
</td>
<td><a href="#" class="btn btn-danger delete-btn" data-post-id="${singlePostData.id}" >Delete</a></td>`
selectTbody.appendChild (tableRowElement);
});
}
})

.catch(function(error){
console.log(error, "error");
});
};

getPostsData();

selectCreatePostFormElement.addEventListener('submit', function(event){
event.preventDefault();
const getPostTitleField = document.querySelector ("#post_title");
const getPostBodyField = document.querySelector ("#post_body");
const postCreateBtn = document.querySelector ("#post-create-btn");
    
if(!getPostTitleField.value || !getPostBodyField.value){
alert('please fill the values')
return;
}

const formBody = {
title: getPostTitleField.value,
body:  getPostBodyField.value,
};

postCreateBtn.setAttribute ("disabled", "disabled");

fetch(`${apiBaseUrl}/posts`,{
header:{
"Content-Type" : "application/json"},
method : "POST",
body: JSON.stringify (formBody)
})

.then (function(response){
return response.json();
})

.then (function(data){
getPostBodyField.value = "";
getPostTitleField.value = "";
$("#create-todo").modal("hide");
postCreateBtn.removeAttribute ("disabled");
})

.catch (function(error){
console.log(error);
postCreateBtn.removeAttribute ("disabled");
});
});

selectTbody.addEventListener ('click',function(event){
event.preventDefault();
const currentElement = event.target;
if(currentElement.classList.contains("delete-btn")){
const deletePostId = currentElement.dataset.postId;
if(confirm('Are You Sure')){
fetch(`${apiBaseUrl}/posts/${deletePostId}`,{
method: "DELETE",
})
            
.then(function(response){
getPostsData();
})
.catch(function(error){
console.log (error);
});
}}

if(currentElement.classList.contains("edit-btn")){
const editPostId = currentElement.dataset.postId;
fetch(`${apiBaseUrl}/posts/${editPostId}`)
.then (function(response){
return response.json();
})

.then(function(data) {
const editPostTitleInputField = 
document.querySelector ("#edit_post_title");
const editPostBodyInputField =
document.querySelector ("#edit_post_body");
editPostTitleInputField.value = data.title;
editPostBodyInputField.value = data.body;

const hiddenPostIdField = document.querySelector ("#edit_post_id");
hiddenPostIdField.value = editPostId;

})
.catch(function(error){
    console.log (error);
});
}   
});

const selectEditFormElement = document.querySelector ("#edit-post-form");

selectEditFormElement.addEventListener("submit", function(event){
event.preventDefault();
const editPostTitleInputField = document.querySelector ("#edit_post_title");
const editPostBodyInputField = document.querySelector ("#edit_post_body");
const hiddenPostIdField = document.querySelector ("#edit_post_id");
const formBody = {
title :  editPostTitleInputField.value,
body : editPostBodyInputField.value,
};

fetch(`${apiBaseUrl}/posts/${hiddenPostIdField.value}`,{
headers : {
"Content-Type" : "application/json",},
method : "PUT",
body: JSON.stringify (formBody),
})
.then (function(response){
return response.json();
})
.then(function(data){
$("#edit-post") .modal ("hide");
getPostsData();
})
.catch(function(error){
console.log (error);
});
});
