function handleSubmit(event) {
  event.preventDefault();
  alert("Generating a poem for you!");

  new Typewriter("#poem", {
    strings: "Gentle buds emerge",
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

let poemFormElemnt = document.querySelector("#poem-generator-form");
poemFormElemnt.addEventListener("submit", handleSubmit);
