// let alltest = document.querySelectorById("#alltest");
// let truetest = document.querySelectorById("#True");
// let falsetest = document.querySelectorById("#False");
// let button = document.querySelector('button');
// let p = document.querySelectorById(#message);

// button.addEventListener(onclick , percentage);
// function percentage(){
//     if((truetest.value + falsetest.value) >= alltest.value){
//         (100*truetest.value)/alltest.value;
//     }
//     else(){
//         p.innerHTML = `undefined value`
//     }
// }

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
