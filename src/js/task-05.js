const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (refs.input.value === "") {
    return (span.textContent = "Anonymous");
  }
  refs.span.textContent = event.currentTarget.value;
}


// const inputEl = document.querySelector("#name-input");
// const spanEl = document.querySelector("#name-output");
// inputEl.addEventListener("input", (event) => {
//   if (inputEl.value === "") {
//     return (spanEl.textContent = "Anonymous");
//   }
//   spanEl.textContent = event.currentTarget.value;
// });