function calculateLoan() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value) * 12;

    if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
        document.getElementById('result').innerText = "Proszę wypełnić wszystkie pola.";
        return;
    }

    const x = Math.pow(1 + rate, years);
    const monthly = (amount * x * rate) / (x - 1);
    const result = monthly.toFixed(2);

    document.getElementById('result').innerText = `Twoja rata miesięczna: ${result} PLN`;
}
