const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.num button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === "AC") {
            display.innerText = '0';
        } else if (value === '=') {
            try {
                display.innerText = eval(display.innerText);
            } catch (e) {
                display.innerText = 'Error';
            }
        } else {
            if (display.innerText === '0') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }
    });
});
