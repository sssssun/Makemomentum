const form= document.querySelector(".js-form");
const input=form.querySelector("input");
const greeting=document.querySelector(".js-greetings");
const USER_LS="currentUser",
      SHOWING_CN="showing";

function saveName(text){
  localStorage.setItem(USER_LS,text);
}
//user가 뭐 입력하면 preventDefault로 새로고침 방지하고
//currentValue 저장해서 usergreeting에 보내고
//그것을 계속 localStorage에 저장
function handleSubmit(event){
  event.preventDefault();
  const currentValue=input.value;
  greetingUser(currentValue);
  saveName(currentValue);
}

function askUserName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit",handleSubmit);

}

function greetingUser(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText=`Hello ${text}`;
}

function loadName(){
  const currentUser=localStorage.getItem(USER_LS);

  if(currentUser===null){
    askUserName();
  }
  else{
    greetingUser(currentUser);
  }
}

function init(){
  loadName();
}

init();
