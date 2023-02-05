const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    inputEl.classList.remove('invalid', 'valid');
    (inputEl.value.length === Number(inputEl.dataset.length)) ?
        inputEl.classList.add('valid') :
        inputEl.classList.add('invalid');
}
