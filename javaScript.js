

let alltest = document.getElementById("alltest");
let truetest = document.getElementById("True");
let falsetest = document.getElementById("False");
let button = document.getElementById('button');
let p = document.getElementById("message");

button.addEventListener("click", percentage);

function percentage() {
    if (parseInt(truetest.value) + parseInt(falsetest.value) <= parseInt(alltest.value)) {
        const result = (100 * parseInt(truetest.value)) / parseInt(alltest.value);
        p.innerHTML = `Percentage: ${result.toFixed(2)}%`;
    } else {
        p.innerHTML = `Invalid input: Sum of true and false tests should not exceed the total tests.`;
    }
}
