// DOM Elements

const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');


const displayEl = document.querySelector('.display');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');


const divisionEl = document.querySelector('.division');
const multiplyEl = document.querySelector('.multiply');
const plusEl = document.querySelector('.plus');
const minusEl = document.querySelector('.minus');
const equalEl = document.querySelector('.equal');


const deimalEl = document.querySelector('.decimal');
const number0El = document.querySelector('.number-0');
const number1El = document.querySelector('.number-1');
const number2El = document.querySelector('.number-2');
const number3El = document.querySelector('.number-3');
const number4El = document.querySelector('.number-4');
const number5El = document.querySelector('.number-5');
const number6El = document.querySelector('.number-6');
const number7El = document.querySelector('.number-7');
const number8El = document.querySelector('.number-8');
const number9El = document.querySelector('.number-9');

const numberElArray = [
    number0El, number1El, number2El, number3El,number4El,number5El,
    number6El, number7El, number8El, number9El
];

// Function

const getValue = () => {
    const currentDisplayStr = displayEl.textContent;
    return currentDisplayStr.split(',').join('');
}

const getValuenum = () => {

    return parseFloat(getValue());
}
const handleNumberClick = (numStr) => {
    const currentDisplayStr = getValue();

    if (currentDisplayStr == '0') {
        displayEl.textContent = numStr;

    }
    else {
        displayEl.textContent = parseFloat(currentDisplayStr + numStr).toLocaleString();

    }

};









// Event

for (let i =0; i< numberElArray.length; i++) {
    const numberEl = numberElArray[i];
    numberEl.addEventListener('click',() => {

        handleNumberClick (i.toString());
    });
}


// Set up the time

const updateTime = () => {
    const currentTime  = new Date();

    const currentHour  = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2,'0');



}

setInterval(updateTime, 1000);
updateTime();


