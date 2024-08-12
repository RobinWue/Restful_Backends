let btn = document.getElementById("btn");
let output = document.getElementById("output");

btn.addEventListener("click", getQuote);

function getQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => response.json())
    .then((data) => {
      output.textContent = `"${data.quote}" - ${data.author}`;
    });
}
