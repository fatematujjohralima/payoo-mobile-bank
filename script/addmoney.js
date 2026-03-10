document.getElementById('btn-addmoney').addEventListener('click', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    // console.log(typeof amount);
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    const newBalance = convertedAmount + convertedMainBalance;
    document.getElementById('main-balance').innerText = newBalance;
})