let result = 0;

function showQuestion() {
    let num1 = document.getElementById("a");
    let num2 = document.getElementById("b");

    var var1 = Math.floor(Math.random() * 25) + 1;
    var var2 = Math.floor(Math.random() * 25) + 1;

    num1.innerHTML = var1;
    num2.innerHTML = var2;

    return var1 * var2;
}

var ans = showQuestion();
console.log(ans);
let score = document.getElementById('result');
score.innerHTML = result;

function check() {
    let input = document.getElementById('inputans')
    if (input.value == ans) {
        result++;
    }
    else {
        result--;
    }
    input.value = "";
    ans = showQuestion();
    score.innerHTML = result;
    console.log(result);
    console.log(ans);
}

