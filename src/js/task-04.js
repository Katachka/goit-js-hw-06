// варіант по Репеті
const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
    console.log(counter);
    valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function () {
    counterValue.increment();
    console.log(counter);
    valueEl.textContent = counterValue.value;
});

// варіант важкий

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const valueEl = document.querySelector('#value');
// let counterValue = 0;

// decrementBtn.addEventListener('click', onDecrementBtnClick);
// incrementBtn.addEventListener('click', onIncrementBtnClick);


// function onDecrementBtnClick() {
//     counterValue -= 1;
//     return numberChange(counterValue);
// }
// function onIncrementBtnClick() {
//     counterValue += 1;
//     return numberChange(counterValue);
// }
// function numberChange(value) {
//     return valueEl.innerHTML = `${value}`;
// }
