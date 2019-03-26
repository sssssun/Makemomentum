const COORDS="coords";
const API_KEY="ea2577bd25bb28385fd4ef136baed41f";
//api: 다른 서버로부터 데이터를 손쉽게 가져올 수 있는 수단
//특정 웹사이트로부터 데이터를 얻거나 컴퓨터끼리의 소통을 돕는다

function getWeather(lat,lon){
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  ).then(function(response){
    return response.json()
  }).then(function(json){
    console.log(json);
  });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
  // console.log(position);
  const latitude=position.coords.latitude;
  const longitude=position.coords.longitude;
  const coordsObj={
    latitude,
    longitude
  };
  saveCoords(coordsObj);
}

function handleGeoError(){
  console.log("Cannot access to your location");
}
function askCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
  const loadedCoords=localStorage.getItem(COORDS);
  if(loadedCoords==null){
    askCoords();
  }
  else{
    const parseCoords=JSON.parse(loadedCoords);
    //console.log(parseCoords);
    getWeather(parseCoords.latitude,parseCoords.longitude);
  }

}
function init(){
  loadCoords();
}

init();
