function displayResponse(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

function handleSubmit(event) {
  event.preventDefault();
  let subject = document.querySelector("#user-word");
  let apiKey = "98bc9f158331o422ta5db05dbd90ba36";
  let context =
    "You are a romantic heiku expert and every time you are being asked, you create a unique heiku in the subject of the provided word and display it making sure each line is seperated with a <br />";
  let prompt = `Please generate a heiku about ${subject.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayResponse);

  let poem = document.querySelector("#poem");
  poem.classList.remove("hidden");
  poem.innerHTML = `<div class="blink">Generating a heiku about ${subject.value}...</div>`;
}

let poemFormElemnt = document.querySelector("#poem-generator-form");
poemFormElemnt.addEventListener("submit", handleSubmit);
