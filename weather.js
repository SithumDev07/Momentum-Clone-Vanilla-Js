function onGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${getAPIKey()}`;
  fetch(url);
}

function onGeoError() {
  alert("Can't find your location, Sorry 😕");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
