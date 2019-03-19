const toDoform=document.querySelector(".js-toDoform");
const toDoInput=toDoform.querySelector("input");
const toDoList=document.querySelector(".js-toDoList");

const TODO_LS='todo';
const TOCO_CN='showingtodo';



function showTodo(text){
  const li=document.createElement("li");
  const deleteBtn=document.createElement("delete");
  const span=document.createElement("span");
  span.innerText=text;
  li.appendChild(span);
  li.appendChild(deleteBtn);
  toDoList.appendChild(li);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue=toDoInput.value;
  showTodo(currentValue);
  toDoInput.value="";
}

function loadTodo(){
  const todo=localStorage.getItem(TODO_LS);

  if(todo!==null){
    showTodo();
  }
}


function init(){
  loadTodo();
  toDoform.addEventListener("submit",handleSubmit);
}

init();
