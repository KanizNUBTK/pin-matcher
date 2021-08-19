function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    // console.log(pinString);
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }

}
function generatePin() {
    const pin = getPin();
    // console.log(pin);
    document.getElementById('displayPin').value = pin;
}
function verifyPin() {
    const pin = document.getElementById('displayPin').value;
    const typesNumber = document.getElementById('types-number').value;
    const sucessMgs = document.getElementById('notify-sucess');
    const failError = document.getElementById('notify-fail');
    if (pin == typesNumber) {
        sucessMgs.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        failError.style.display = 'block';
        sucessMgs.style.display = 'none';

    }
}
// calculator
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('types-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})