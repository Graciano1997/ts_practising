import { sum } from "./operation.js";
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const calcForm = document.querySelector('#calcForm');
const plusBtn = document.querySelector('#+');
const subBtn = document.querySelector('#-');
const multBtn = document.querySelector('#*');
const divBtn = document.querySelector('#/');
const result = document.querySelector('#result');
plusBtn === null || plusBtn === void 0 ? void 0 : plusBtn.addEventListener('click', () => {
    if (first.value && second.value) {
        const resul = sum(first.value, second.value);
        result.textContent = resul;
        console.log(resul);
    }
});
calcForm === null || calcForm === void 0 ? void 0 : calcForm.addEventListener('submit', (el) => {
    el.preventDefault();
});
