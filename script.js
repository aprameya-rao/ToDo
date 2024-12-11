//retirve todo from local or intialize an empty array 

let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput= document.getElementById("todoInput");



