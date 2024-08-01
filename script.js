function calculate(operation) {
    let num1 = document.getElementById('num1').value.trim();
    let base1 = parseInt(document.getElementById('base1').value);
    let num2 = document.getElementById('num2').value.trim();
    let base2 = parseInt(document.getElementById('base2').value);
    let resultBase = parseInt(document.getElementById('resultBase').value);

    if (isNaN(base1) || isNaN(base2) || isNaN(resultBase) || !num1 || !num2) {
        document.getElementById('result').textContent = 'Invalid inputs';
        return;
    }

    let decimalNum1 = parseInt(num1, base1);
    let decimalNum2 = parseInt(num2, base2);
    let result;

    switch (operation) {
        case 'add':
            result = decimalNum1 + decimalNum2;
            break;
        case 'subtract':
            result = decimalNum1 - decimalNum2;
            break;
        case 'multiply':
            result = decimalNum1 * decimalNum2;
            break;
        case 'divide':
            if (decimalNum2 === 0) {
                document.getElementById('result').textContent = 'Error: Division by zero';
                return;
            }
            result = decimalNum1 / decimalNum2;
            break;
        case 'exponent':
            result = decimalNum1 ** decimalNum2;
            break;
        case 'modulus':
            result = decimalNum1 % decimalNum2;
            break;
        case 'sqrroot':
                if (decimalNum2 === 0) {
                    document.getElementById('result').textContent = 'Error: Division by zero';
                    return;
                }
                result = Math.pow(decimalNum1, 1 / decimalNum2);
                break;
        case 'factorial1':
            result = factorial(decimalNum1);
            break;
        case 'factorial2':
            result = factorial(decimalNum2);
            break;
        case 'ln':
            result = Math.log(decimalNum1);
            break;
        case 'sinrad':
            result = Math.sin(decimalNum1);
            break;
        case 'sindeg':
            result = Math.sin(decimalNum1 * (Math.PI / 180));
            break;
        case 'numgcd':
            result = gcd(decimalNum1, decimalNum2)
            break;
            case 'numlcm':
            result = lcm(decimalNum1, decimalNum2)
            break;
        default:
            result = 'Error: Invalid operation';
    }

    // Convert result to the desired base
    let baseResult;
    if (typeof result === 'number' && !isNaN(result)) {
        baseResult = result.toString(resultBase);
        console.log(baseResult)
        console.log(resultBase)
    } else {
        baseResult = result;
    }

    document.getElementById('result').textContent = baseResult;

    // Show result container
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('hide');
    resultContainer.classList.add('show');
    document.getElementById('result').classList.remove('hide');
    document.getElementById('result').classList.add('show');
}

function factorial(n) {
    if (n < 0) return 'Error: No negative numbers';
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}


function adjustVisibility() {
    const num1 = document.getElementById('num1').value.trim();
    const num2 = document.getElementById('num2').value.trim();
    
    const num2Container = document.getElementById('num2-container');
    const operationContainer = document.getElementById('operation-container');
    const ansbaseContainer = document.getElementById('ansbase-container');
    
    if (num1) {
        num2Container.classList.remove('hide');
        num2Container.classList.add('show');
    } else {
        num2Container.classList.remove('show');
        num2Container.classList.add('hide');
        operationContainer.classList.remove('show');
        operationContainer.classList.add('hide');
        ansbaseContainer.classList.remove('show');
        ansbaseContainer.classList.add('hide');
        document.getElementById('result-container').classList.remove('show');
        document.getElementById('result-container').classList.add('hide');
    }
    
    if (num2) {
        operationContainer.classList.remove('hide');
        operationContainer.classList.add('show');
        ansbaseContainer.classList.remove('hide');
        ansbaseContainer.classList.add('show');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('num1').addEventListener('input', adjustVisibility);
    document.getElementById('num2').addEventListener('input', adjustVisibility);
});

document.getElementById('resultBase').addEventListener('input', updateResultBase);

function updateResultBase() {
    if (currentOperation) {
        calculate(currentOperation);
    }
}

let currentOperation = '';

function setOperation(operation) {
    currentOperation = operation;
    calculate(operation);
}

document.querySelectorAll('#operation-container button').forEach(button => {
    button.addEventListener('click', function() {
        setOperation(this.getAttribute('onclick').split('\'')[1]);
    });
});
