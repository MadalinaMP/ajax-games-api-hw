var baseUrl = "https://games-world.herokuapp.com";
var buton = document.querySelector("#buton");
var games;

buton.addEventListener("click", getGame);

function getGame() {
  displayLoader();
  fetch(baseUrl + "/games", { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResp) {
      console.log(jsonResp);
      games = jsonResp;

      displayGame(games);
    })
    .finally(hideLoader);
}

function displayGame(game) {
  var myGame = document.getElementById("generatedGame");

  var gameTitle = document.createElement("p");
  gameTitle.innerText = "Title : \n" + game.title;

  var gameDescription = document.createElement("p");
  gameDescription.innerText = "Description : \n" + game.description;

  var gameImg = document.getElementById("forPic");
  gameImg.innerHTML = game.imageUrl;

  myGame.appendChild(gameTitle);
  myGame.appendChild(gameDescription);
  myGame.appendChild(gameImg);

  var screen = document.getElementById("game");
  screen.style.display = "block";
}

function displayLoader() {
  var myLoader = document.getElementById("loader");
  var container = document.getElementById("container");

  container.style.opacity = 0.3;

  myLoader.style.display = "block";
}

function hideLoader() {
  var myLoader = document.getElementById("loader");
  var container = document.getElementById("container");

  container.style.opacity = 1;

  myLoader.style.display = "none";
}
