const title=document.querySelector(".js-title");

const CLICKED_CLASS="clicked";

function handleClick(){
  /*
  const hasClass=title.classList.contains(CLICKED_CLASS);

  if(!hasClass){
    title.classList.add(CLICKED_CLASS);
  }else{
    title.classList.remove(CLICKED_CLASS);
  }
  */

  //클래스가 없으면 add, 있으면 remove
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
  title.addEventListener("click",handleClick);
}

init();
