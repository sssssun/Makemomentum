const toDoform=document.querySelector(".js-toDoform");
const toDoInput=toDoform.querySelector("input");
const toDoList=document.querySelector(".js-toDoList");

const TODO_LS='todo';
const TOCO_CN='showingtodo';

let toDos=[];

function saveTodo(){
  localStorage.setItem(TODO_LS,JSON.stringify(toDos));
}

function deleteTodo(event){
  const li=event.target.parentNode;
  toDoList.removeChild(li);
  //이 위에까지 하면 todo 가 새로고침 후 안지워짐
  const cleantoDos=toDos.filter(function(toDos){
    return toDos.id !== parseInt(li.id);
  })
  console.log(cleantoDos);
  toDos=cleantoDos;
  saveTodo();
}



function showTodo(text){
  const li=document.createElement("li");
  const deleteBtn=document.createElement("button");
  const span=document.createElement("span");
  const newId=toDos.length+1;

  deleteBtn.innerText="✕";
  deleteBtn.addEventListener("click",deleteTodo);
  span.innerText=text;
  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.id=newId;
  toDoList.appendChild(li);
  const toDoObj={
    text:text,
    id:newId
  };
  toDos.push(toDoObj);
  saveTodo();
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue=toDoInput.value;
  showTodo(currentValue);
  toDoInput.value="";
}

function loadTodo(){
  const loadedtodo=localStorage.getItem(TODO_LS);

  if(loadedtodo!==null){
    const parsedtodo= JSON.parse(loadedtodo);
    parsedtodo.forEach(function todo(toDos){
      showTodo(toDos.text);
    });

  }
}


function init(){
  loadTodo();
  toDoform.addEventListener("submit",handleSubmit);
}

init();
