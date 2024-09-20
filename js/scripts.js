document.addEventListener( function () {
    const billInput = document.getElementById('bill-input');
    const peopleInput = document.getElementById('people-input');
    const tipButtons = document.querySelectorAll('.tip-btn');
    const customTipInput = document.getElementById('custom-tip');
    const tipAmountDisplay = document.getElementById('tip-amount');
    const totalAmountDisplay = document.getElementById('total-amount');
    const resetBtn = document.getElementById('reset-btn');
    const errorMessage = document.getElementById('error-message');

    let billValue = 0;
    let tipValue = 0;
    let peopleValue = 1;

    billInput.addEventListener('input', function () {
        billValue = parseFloat(billInput.value);
        calculate();
    });

    peopleInput.addEventListener('input', function () {
        peopleValue = parseFloat(peopleInput.value);
        if (peopleValue <= 0) {
            errorMessage.textContent = "Can't be zero";
        } else {
            errorMessage.textContent = '';
        }
        calculate();
    });

    tipButtons.forEach(button => {
        button.addEventListener('click', function () {
            tipValue = parseFloat(this.getAttribute('data-tip'));
            customTipInput.value = '';
            calculate();
        });
    });

    customTipInput.addEventListener('input', function () {
        tipValue = parseFloat(customTipInput.value);
        calculate();
    });

    resetBtn.addEventListener('click', function () {
        billInput.value = '';
        peopleInput.value = '';
        customTipInput.value = '';
        tipAmountDisplay.textContent = '$0.00';
        totalAmountDisplay.textContent = '$0.00';
        billValue = 0;
        tipValue = 0;
        peopleValue = 1;
        errorMessage.textContent = '';
    });

    function calculate() {
        if (billValue > 0 && peopleValue > 0) {
            const tipAmount = (billValue * (tipValue / 100)) / peopleValue;
            const totalAmount = (billValue / peopleValue) + tipAmount;
            tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
            totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
        }
    }
});
