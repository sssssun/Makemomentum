const body=document.querySelector("body");

const IMAGE_NUM=3;



function showImage(imageNum){
  const image=new Image();
  image.src=`images/${imageNum +1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);

  //API 에서 나온 거면 밑에거가 필요할 거시다
  // image.addEventListener("loadend",handleImageLoad);
}

function randomNum(){
  const number=Math.floor(Math.random()*IMAGE_NUM);
  return number;

}

function init(){
  const num=randomNum();
  showImage(num);
}

init();
