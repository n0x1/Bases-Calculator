function calculate(operation) {
    const num1 = document.getElementById('num1').value.trim();
    const base1 = parseInt(document.getElementById('base1').value);
    const num2 = document.getElementById('num2').value.trim();
    const base2 = parseInt(document.getElementById('base2').value);
    const resultBase = parseInt(document.getElementById('resultBase').value);

    if (isNaN(base1) || isNaN(base2) || isNaN(resultBase) || !num1 || !num2) {
        document.getElementById('result').textContent = 'invalid inputs';
        return;
    }

    const decimalNum1 = parseInt(num1, base1);
    const decimalNum2 = parseInt(num2, base2);
    let result;

    // Perform the selected operation
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
            result = Math.floor(decimalNum1 / decimalNum2);
            break;
        default:
            result = 'invalid operation';
    }

    const baseResult = result.toString(resultBase);
    document.getElementById('result').textContent = baseResult;

    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('hide');
    document.getElementById('result').classList.remove('hide');
    resultContainer.classList.add('show');
    document.getElementById('result').classList.add('show');
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
    } 
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('num1').addEventListener('input', adjustVisibility);
    document.getElementById('num2').addEventListener('input', adjustVisibility);
});
