import { div, mult, sub, sum } from "./operation.js";
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const calcForm = document.querySelector('#calcForm');
const plusBtn = document.querySelector('#plus');
const subBtn = document.querySelector('#minus');
const multBtn = document.querySelector('#time');
const divBtn = document.querySelector('#devide');
const result = document.querySelector('#result');
plusBtn === null || plusBtn === void 0 ? void 0 : plusBtn.addEventListener('click', () => {
    if ((first !== null) && (second !== null)) {
        let n1 = first.value;
        let n2 = second.value;
        const resul = sum(n1, n2);
        result.textContent = resul;
    }
});
subBtn === null || subBtn === void 0 ? void 0 : subBtn.addEventListener('click', () => {
    if ((first !== null) && (second !== null)) {
        let n1 = first.value;
        let n2 = second.value;
        const resul = sub(n1, n2);
        result.textContent = resul;
    }
});
multBtn === null || multBtn === void 0 ? void 0 : multBtn.addEventListener('click', () => {
    if ((first !== null) && (second !== null)) {
        let n1 = first.value;
        let n2 = second.value;
        const resul = mult(n1, n2);
        result.textContent = resul;
    }
});
divBtn === null || divBtn === void 0 ? void 0 : divBtn.addEventListener('click', () => {
    if ((first !== null) && (second !== null)) {
        let n1 = first.value;
        let n2 = second.value;
        const resul = div(n1, n2);
        result.textContent = resul;
    }
});
calcForm === null || calcForm === void 0 ? void 0 : calcForm.addEventListener('submit', (el) => {
    el.preventDefault();
});
