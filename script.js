console.log("Satyam Jha");

let joke = document.querySelector(".joke");
let button = document.querySelector(".button");

let getjokes = () => {
  const header = {
    headers: {
      accept: "application/JSON",
    },
  };

  fetch("https://icanhazdadjoke.com/", header)
    .then((joke) => joke.json())
    .then((obj) => {
      joke.innerHTML = obj.joke;
    })
    .catch((error) => console.log(error));
};
button.addEventListener("click", getjokes);
getjokes();