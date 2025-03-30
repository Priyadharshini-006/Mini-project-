const ageInput = document.getElementById('age');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const age = parseInt(ageInput.value);
    const weight = parseInt(weightInput.value);
    if (isNaN(age) || isNaN(weight)) {
        resultDiv.innerHTML = 'Please enter valid numbers';
        return;
    }
    const catYears = calculateCatYears(age);
    const catWeight = calculateCatWeight(weight);
    resultDiv.innerHTML = `Your cat is ${catYears} years old in cat years and weighs ${catWeight} pounds.`;
});

function calculateCatYears(humanYears) {
    if (humanYears <= 2) {
        return humanYears * 10;
    } else {
        return 20 + (humanYears - 2) * 4;
    }
}

function calculateCatWeight(humanWeight) {
    return humanWeight * 0.75;
}